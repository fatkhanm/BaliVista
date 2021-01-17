const bcrypt = require('bcrypt')

module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        user_id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {type: type.STRING, unique:'compositeIndex'},
        password: type.STRING
    },{
      hooks: {
        beforeCreate: (user) => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt);
        }
      }})
}