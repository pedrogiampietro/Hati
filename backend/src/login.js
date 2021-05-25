const http = require('http');
const notp = require('notp');
const mariadb = require('mariadb');
const base32 = require('thirty-two');
const crypto = require('crypto');
const config = require(__dirname + '/config/config.js');

const LOGIN_PORT = 8000;

const queries = {
  online: 'SELECT COUNT(*) FROM `players_online`',
  //   worlds: 'SELECT id, name, ip, port FROM `worlds`',
  account:
    'SELECT id, sessionkey FROM `accounts` WHERE `name` = ? AND `password` = ? LIMIT 1',
  players:
    'SELECT name, level, sex, vocation, lookbody, looktype, lookhead, looklegs, lookfeet, lookaddons FROM `players` WHERE `account_id` = ?',
  session:
    'UPDATE accounts SET sessionkey = ?, stayloggedinforsession = ? WHERE id = ? LIMIT 1',
};

const vocations = [];
vocations[0] = 'None';
vocations[1] = 'Knight';
vocations[2] = 'Paladin';
vocations[3] = 'Sorcerer';
vocations[4] = 'Druid';
vocations[5] = 'Master Sorcerer';
vocations[6] = 'Elder Druid';
vocations[7] = 'Royal Paladin';
vocations[8] = 'Elite Knight';

const pool = mariadb.createPool({
  socketPath: '/var/run/mysqld/mysqld.sock',
  connectionLimit: 50,
  allowPublicKeyRetrieval: true,
  host: 'localhost',
  user: 'root',
  database: '',
  password: '',
});

const state = {
  online: 0,
  worlds: [
    {
      id: 0,
      name: 'Hati',
      ip: '127.0.0.1',
      port: 7172,
      location: 'ALL',
      pvptype: 'pvp',
    },
  ],
};

const request = (req, res) => {
  if (req.headers['user-agent'] !== 'Mozilla/5.0') return res.end();
  let body = '';
  req.on('data', (data) => {
    body += data;
    if (body.length > 1e6) req.connection.destroy();
  });
  req.on('end', async () => {
    try {
      const message = JSON.parse(body);
      await parseMessage(res, message);
    } catch (e) {
      return res.end();
    }
  });
};

const validate = (secret, token) => {
  const key = base32.decode(secret).toString('ascii');
  const compare = notp.totp.gen(key);
  return compare === token && notp.totp.verify(token, key);
};

async function queryDb() {
  const queryArgs = Array.prototype.slice.call(arguments);
  let sqlArgs = [];

  try {
    const conn = await pool.getConnection();

    if (queryArgs.length > 1) {
      sqlArgs = queryArgs[1];
    }

    const res = await conn.query(queryArgs[0], sqlArgs);

    console.log(conn);

    conn.release();
    return res;
  } catch (err) {
    console.error('Login server crashed!', err);
    process.exit(1);
  }
}

async function updateWorlds() {
  const result = await queryDb(queries.worlds);
  state.worlds = result.map((world) => ({
    id: world.id,
    name: world.name,
    ip: world.ip,
    port: world.port,
    location: 'EUR',
    pvptype: 3,
  }));
}

async function updateOnline() {
  const result = await queryDb(queries.online);
  state.online = result ? result[0] : 0;
}

async function parseLogin(res, credentials) {
  const { accountname, password, token, stayloggedin, sessionarg } =
    credentials;
  const sendError = (code, data) =>
    res.end(
      JSON.stringify({
        errorCode: code,
        errorMessage: data,
      })
    );

  // Missing credentials
  if (!accountname || !password) {
    return sendError(3, 'Account name or password is incorrect.');
  }

  try {
    // Lookup account with credentials
    const account = await queryDb(queries.account, [accountname, password]);
    if (!account || account.length === 0) {
      return sendError(3, 'Account name or password is incorrect.');
    }

    // Two-factor authentication
    const { id, authsecret } = account[0];
    if (authsecret && (!token || !validate(authsecret, token))) {
      return sendError(6, 'Two-factor token required for authentication.');
    }

    // Update session key
    const rememberSession = stayloggedin ? 1 : 0;
    const d = new Date();
    const sessionkey = `${accountname}\n${sessionarg}\n123123123\n${Math.floor(
      d.getTime() / 30
    )}`;
    // const sessionkey = crypto
    //   .randomBytes(Math.ceil(30 / 2))
    //   .toString('hex')
    //   .slice(0, 30);

    //await queryDb(queries.session, [sessionkey, rememberSession, id]);

    // Lookup player list
    const players = await queryDb(queries.players, [id]);

    // Login response
    const response = JSON.stringify({
      session: {
        sessionkey: sessionkey,
        lastlogintime: 0,
        ispremium: true,
        premiumuntil: 0,
        status: 'active',
        returnernotification: false,
        showrewardnews: false,
        isreturner: true,
        fpstracking: false,
        optiontracking: false,
      },
      playdata: {
        worlds: state.worlds.map((world) => ({
          id: 0,
          name: world.name,
          externaladdress: world.ip,
          externalport: world.port,
          externaladdressprotected: world.ip,
          externaladdressunprotected: world.ip,
          externalportprotected: world.port,
          externalportunprotected: world.port,
          previewstate: 0,
          location: world.location,
          anticheatprotection: false,
          pvptype: world.pvptype,
          istournamentworld: false,
          restrictedstore: false,
          currenttournamentphase: 2,
        })),
        characters: players.map((player) => ({
          worldid: 0,
          name: player.name,
          level: player.level,
          vocation: vocations[player.vocation],
          ismale: player.sex === 1,
          ishidden: player.hidden === 1,
          tutorial: false,
          outfitid: player.looktype,
          headcolor: player.lookhead,
          torsocolor: player.lookbody,
          legscolor: player.looklegs,
          detailcolor: player.lookfeet,
          addonsflags: player.lookaddons,
        })),
      },
    });

    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(response),
    });

    res.end(response);
  } catch (error) {
    return res.end();
  }
}

async function parseMessage(res, message) {
  const { type } = message;
  const sendResponse = (data) => res.end(JSON.stringify(data));

  switch (type) {
    case 'boostedcreature':
      return sendResponse({
        raceid: 10,
      });
    case 'cacheinfo':
      return sendResponse({
        playersonline: 0,
        twitchstreams: 0,
        twitchviewer: 130,
        gamingyoutubestreams: 0,
        gamingyoutubeviewer: 0,
      });
    case 'login':
      const hash = crypto.createHash('sha1');
      hash.update(message.password);
      return parseLogin(res, {
        accountname: message.email,
        token: message.token,
        sessionarg: message.password,
        password: hash.digest('hex'),
        stayloggedin: message.stayloggedin,
      });

    default:
      return res.end();
  }
}

// start();

module.exports = start = async () => {
  try {
    await updateOnline();
    // await updateWorlds();
    setInterval(() => updateOnline, 30 * 1000);
    // setInterval(() => updateWorlds, 15 * 1000);
    http.createServer(request).listen(LOGIN_PORT);
    console.log(`Login server listening on "${LOGIN_PORT}"`);
  } catch (e) {
    console.error('Login server crashed!', e);
    process.exit(1);
  }
};
