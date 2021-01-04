'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const cacher = require('sequelize-redis-cache')
const redis = require('redis')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.js')[env]
const db = {}

const redisClient = redis.createClient(
  process.env.REDIS_PORT,
  process.env.REDIS_HOST
)

let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  )
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    )
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

// each request will live for 10 seconds in cache
const sequelizeCacher = cacher(sequelize, redisClient).ttl(10)

db.sequelize = sequelize
db.Sequelize = Sequelize
db.cacher = sequelizeCacher

module.exports = db
