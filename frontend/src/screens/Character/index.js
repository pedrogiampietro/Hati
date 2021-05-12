import React from 'react';
import { connect } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';
import { playerGetCharacter } from '../../actions/PlayerActions';
import { genders, characterVocations, towns } from '../../config';
import { convertTimestempToDate } from '../../helpers/DateTime';

import Outfiter from '../../helpers/Outfiter';

import { FaCrosshairs, FaSkullCrossbones, FaTimes } from 'react-icons/fa';

import Container from '../Layouts/Container';
import './styles.css';

const arrItems = {
  slotHead: 1,
  slotNecklace: 2,
  slotBackpack: 3,
  slotArmor: 4,
  slotRight: 5,
  slotLeft: 6,
  slotLegs: 7,
  slotFeet: 8,
  slotRing: 9,
  slotAmmo: 10,
};

const Character = ({ playerGetCharacter }) => {
  const history = useHistory();
  const { name } = useParams();
  const [characterPage, setCharacterPage] = React.useState([]);
  const [playerDeaths, setPlayerDeaths] = React.useState([]);
  const [playerItems, setPlayerItems] = React.useState([]);
  const [stateItems, setStateItems] = React.useState(arrItems);

  React.useEffect(() => {
    playerGetCharacter(name)
      .then(({ payload }) => {
        /* data players */
        const dataPlayers = payload.data.data.rows[0];
        setCharacterPage(dataPlayers);

        /* data deaths */
        const dataDeaths = payload.data.data.rows[0].player_deaths;
        setPlayerDeaths(dataDeaths);

        const playerItems = payload.data.data.rows[0].player_items;
        setPlayerItems(playerItems);
      })
      .catch((err) => {
        history.push('/PageSearch');
      });
  }, [name, history, playerGetCharacter]);

  const meleeArray = [
    characterPage.skill_axe,
    characterPage.skill_club,
    characterPage.skill_sword,
  ];
  const newMeleeSkill = Math.max(...meleeArray);

  React.useEffect(() => {
    let oizin = {};
    Object.entries(arrItems).forEach(([value, index]) => {
      playerItems.forEach((item) => {
        if (item.pid === index) {
          oizin[value] = item.itemtype;
        }
      });
    });

    setStateItems(oizin);
  }, [playerItems]);

  console.log(stateItems);

  return (
    <Container>
      <div className="text-center mb-3">
        <div className="col-xl-8 ml-auto mr-auto">
          <div className="card p-4 rounded-plus bg-faded">
            <div className="row justify-content-between">
              <div className="col-lg-6 col-xl-4 order-lg-1 order-xl-1">
                <div
                  className="card border shadow-0 mb-g shadow-sm-hover"
                  data-filter-tags="oliver kopyov"
                >
                  <div className="card-body border-faded border-top-0 border-left-0 border-right-0 rounded-top">
                    <div className="d-flex flex-row align-items-center">
                      <span className="status status-success mr-3">
                        <span className="rounded-circle profile-image d-block cover">
                          <Outfiter
                            Name={characterPage.name}
                            LookBody={characterPage.lookbody}
                            LookFeet={characterPage.lookfeet}
                            LookHead={characterPage.lookhead}
                            LookLegs={characterPage.looklegs}
                            LookType={characterPage.looktype}
                            LookAddons={characterPage.lookaddons}
                          />
                        </span>
                      </span>
                      <div className="info-card-text flex-1">
                        <span
                          className="fs-xl text-truncate text-truncate-lg text-primary"
                          aria-expanded="false"
                        >
                          {characterPage.name}
                        </span>
                        <span className="text-truncate text-truncate-xl">
                          Leader of Mata Rindo
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0 collapse show">
                    <table className="table table-striped table-condensed">
                      <tbody>
                        <tr>
                          <td>
                            <span
                              className="fs-xl text-truncate text-truncate-lg text-primary"
                              aria-expanded="false"
                            >
                              Sex:
                            </span>
                          </td>
                          <td>{genders[characterPage.sex]}</td>
                        </tr>
                        <tr>
                          <td>
                            <span
                              className="fs-xl text-truncate text-truncate-lg text-primary"
                              aria-expanded="false"
                            >
                              Level:
                            </span>
                          </td>
                          <td>{characterPage.level}</td>
                        </tr>
                        <tr>
                          <td>
                            <span
                              className="fs-xl text-truncate text-truncate-lg text-primary"
                              aria-expanded="false"
                            >
                              Vocation:
                            </span>
                          </td>
                          <td>{characterVocations[characterPage.vocation]}</td>
                        </tr>
                        <tr>
                          <td>
                            <span
                              className="fs-xl text-truncate text-truncate-lg text-primary"
                              aria-expanded="false"
                            >
                              Last Login:
                            </span>
                          </td>
                          <td>
                            {convertTimestempToDate(characterPage.lastlogin)}
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <span
                              className="fs-xl text-truncate text-truncate-lg text-primary"
                              aria-expanded="false"
                            >
                              Resident:
                            </span>
                          </td>
                          <td>{towns[characterPage.town_id]}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="row no-gutters row-grid">
                      <div className="col-6">
                        <div className="text-center py-3">
                          <h5 className="mb-0 fw-700">
                            31
                            <small className="mb-0 fs-xl text-truncate text-truncate-lg text-primary">
                              Premium Account
                            </small>
                          </h5>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="text-center py-3">
                          <h5 className="mb-0 fw-700">
                            371
                            <small className="mb-0 fs-xl text-truncate text-truncate-lg text-primary">
                              Crown Token
                            </small>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-xl-6 order-lg-2 order-xl-3">
                <div className="card mb-g">
                  <div className="row row-grid no-gutters">
                    <div className="col-12">
                      <div className="p-3">
                        <h2 className="mb-0 fs-xl">Quests</h2>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="p-3 d-flex text-primary align-items-center fs-xl">
                        <i className="fas fa-star mr-1"></i>
                        <i className="fas fa-star mr-1"></i>
                        <i className="fas fa-star mr-1"></i>
                        <i className="fas fa-star mr-1"></i>
                        <i className="fal fa-star mr-1"></i>
                        <span className="ml-auto">4/5 Stars</span>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="p-3">
                        <div className="fw-500 fs-xs">Demon Helmet</div>
                        <div className="progress progress-xs mt-2">
                          <div
                            className="progress-bar bg-primary-300 bg-primary-gradient"
                            role="progressbar"
                            style={{ width: '80%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="p-3">
                        <div className="fw-500 fs-xs">Annhilator</div>
                        <div className="progress progress-xs mt-2">
                          <div
                            className="progress-bar bg-primary-300 bg-primary-gradient"
                            role="progressbar"
                            style={{ width: '100%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="p-3">
                        <div className="fw-500 fs-xs">Inquisition</div>
                        <div className="progress progress-xs mt-2">
                          <div
                            className="progress-bar bg-primary-300 bg-primary-gradient"
                            role="progressbar"
                            style={{ width: '75%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="p-3">
                        <div className="fw-500 fs-xs">Knowledge</div>
                        <div className="progress progress-xs mt-2">
                          <div
                            className="progress-bar bg-primary-300 bg-primary-gradient"
                            role="progressbar"
                            style={{ width: '95%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="p-3">
                        <div className="fw-500 fs-xs">PostMan</div>
                        <div className="progress progress-xs mt-2">
                          <div
                            className="progress-bar bg-danger-300 bg-warning-gradient"
                            role="progressbar"
                            style={{ width: '30%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="p-3 text-center">
                        <Link to="/">View all</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <br />
              <div className="col-md-4">
                <div className="panel panel-default">
                  <div className="panel-heading">Statistics</div>
                  <div className="panel-body panel-player-extra">
                    <div align="center">Health</div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped bg-primary progress-bar-animated"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        role="progressbar"
                        style={{
                          width:
                            (characterPage.health / characterPage.healthmax) *
                              100 +
                            '%',
                        }}
                      >
                        <span>
                          {characterPage.health} / {characterPage.healthmax}
                        </span>
                      </div>
                    </div>
                    <div align="center">Mana</div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped bg-info progress-bar-animated"
                        role="progressbar"
                        style={{
                          width:
                            (characterPage.mana / characterPage.manamax) * 100 +
                            '%',
                        }}
                      >
                        <span>
                          {characterPage.mana} / {characterPage.manamax}
                        </span>
                      </div>
                    </div>
                    <div align="center">Soul</div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped bg-warning"
                        role="progressbar"
                        style={{
                          width: (characterPage.soul / 200) * 100 + '%',
                        }}
                      >
                        <span>{characterPage.soul} / 200</span>
                      </div>
                    </div>
                    <div align="center">Stamina</div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        style={{ width: '0%' }}
                      >
                        <span>{characterPage.stamina}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="panel panel-default">
                  <div className="panel-heading">Equipment</div>
                  <div className="panel-body panel-player-extra">
                    <table className="table table-striped table-hover table-fixed">
                      <tbody>
                        <tr>
                          <td align="center">
                            <img
                              src={require(`../../assets/img/items/${
                                stateItems.slotNecklace
                                  ? stateItems.slotNecklace
                                  : '2'
                              }.gif`)}
                              alt="Ring"
                            />
                          </td>
                          <td align="center">
                            <img
                              src={require(`../../assets/img/items/${
                                stateItems.slotHead ? stateItems.slotHead : '1'
                              }.gif`)}
                              alt="Helmet"
                            />
                          </td>
                          <td align="center">
                            <img
                              src={require(`../../assets/img/items/${
                                stateItems.slotBackpack
                                  ? stateItems.slotBackpack
                                  : '3'
                              }.gif`)}
                              alt="Backpack"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src={require(`../../assets/img/items/${
                                stateItems.slotLeft ? stateItems.slotLeft : '6'
                              }.gif`)}
                              alt="Melee"
                            />
                          </td>
                          <td align="center">
                            <img
                              src={require(`../../assets/img/items/${
                                stateItems.slotArmor
                                  ? stateItems.slotArmor
                                  : '4'
                              }.gif`)}
                              alt="Armor"
                            />
                          </td>
                          <td align="center">
                            <img
                              src={require(`../../assets/img/items/${
                                stateItems.slotRight
                                  ? stateItems.slotRight
                                  : '5'
                              }.gif`)}
                              alt="Shield"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src={require(`../../assets/img/items/${
                                stateItems.slotRing ? stateItems.slotRing : '9'
                              }.gif`)}
                              alt="Ring"
                            />
                          </td>
                          <td align="center">
                            <img
                              src={require(`../../assets/img/items/${
                                stateItems.slotLegs ? stateItems.slotLegs : '7'
                              }.gif`)}
                              alt="Legs"
                            />
                          </td>
                          <td align="center">
                            <FaTimes size={20} className="mt-2" />
                          </td>
                        </tr>
                        <tr>
                          <td align="center">Soul: {characterPage.soul}</td>
                          <td align="center">
                            <img
                              src={require(`../../assets/img/items/${
                                stateItems.slotFeet ? stateItems.slotFeet : '9'
                              }.gif`)}
                              alt="Boots"
                            />
                          </td>
                          <td align="center">Cap: {characterPage.cap}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="panel panel-default">
                  <div className="panel-heading">Skills</div>
                  <div className="panel-body panel-player-extra">
                    <table className="table table-striped table-hover table-fixed">
                      <tbody>
                        <tr>
                          <td className="left">Magic Level</td>
                          <td className="right">{characterPage.maglevel}</td>
                        </tr>
                        <tr>
                          <td className="left">Melee</td>
                          <td className="right">
                            {newMeleeSkill ? newMeleeSkill : null}
                          </td>
                        </tr>
                        <tr>
                          <td className="left">Distance</td>
                          <td className="right">{characterPage.skill_dist}</td>
                        </tr>
                        <tr>
                          <td className="left">Shielding</td>
                          <td className="right">
                            {characterPage.skill_shielding}
                          </td>
                        </tr>
                        <tr>
                          <td className="left">Fishing</td>
                          <td className="right">
                            {characterPage.skill_fishing}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="page-header" style={{ padding: '50px 2rem' }}>
                  <h2>
                    Death List{' '}
                    <small>
                      track the death of your
                      <code>enemy!</code>.
                    </small>
                  </h2>
                </div>
                <div className="timeline">
                  <div className="line text-muted"></div>
                  {playerDeaths && playerDeaths.length
                    ? playerDeaths.map((props) => {
                        return (
                          <div key={props.time}>
                            <article className="panel panel-danger">
                              <div className="panel-heading icon">
                                {props.is_player === 1 ? (
                                  <FaCrosshairs size={20} className="mt-2" />
                                ) : (
                                  <FaSkullCrossbones
                                    size={20}
                                    className="mt-2"
                                  />
                                )}
                              </div>

                              <div className="panel-heading">
                                <h2 className="panel-title">
                                  {props.is_player === 1 ? 'Fragged' : 'Died'}{' '}
                                  <div className="text-muted float-right">
                                    <time>
                                      {convertTimestempToDate(props.time)}
                                    </time>
                                  </div>
                                </h2>
                              </div>

                              <div className="panel-body">
                                <strong>Died</strong> at level {props.level}.{' '}
                                {props.unjustified === 1 ? (
                                  <span className="badge badge-danger">
                                    unjustified
                                  </span>
                                ) : null}
                                <br />
                                <br />
                                <code>
                                  {props.mostdamage_by !== props.killed_by
                                    ? props.mostdamage_by
                                    : null}
                                </code>{' '}
                                {props.mostdamage_by !== props.killed_by ? (
                                  <>
                                    {' '}
                                    <span className="badge badge-primary">
                                      most damage
                                    </span>
                                    <br />
                                    <br />
                                  </>
                                ) : null}
                                <code>{props.killed_by}</code>
                              </div>
                            </article>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    players: state.player.player,
  };
};

export default connect(mapStateToProps, { playerGetCharacter })(Character);
