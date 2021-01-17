module.exports = (sequelize, type) => {
    return sequelize.define('film_favorite', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: type.STRING,
        user_id: type.INTEGER
    })
}