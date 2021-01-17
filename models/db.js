const Sequelize = require('sequelize')
const UserModel = require('./Users')
const FavoriteModel = require('./Favorite')
const bcrypt = require('bcrypt')

const sequelize = new Sequelize('filmfav', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  })
  
  const User = UserModel(sequelize, Sequelize)
  const Favorite = FavoriteModel(sequelize, Sequelize)
  
  sequelize.sync()
    .then(() => {
      console.log(`Database & tables created!`)
    })
//dummy
    User.create({
        name: "Fatkhan",
        password: "gokil123"
    })
    User.create({
        name: "John",
        password: "Johnganteng"
    })
  module.exports = {
    User,
    Favorite
  }