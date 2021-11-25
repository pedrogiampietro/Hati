require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_ROOT,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    operatorsAliases: '0',
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  mailer: {
    host: 'smtp.gmail.com',
    port: 587,
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  },
};
