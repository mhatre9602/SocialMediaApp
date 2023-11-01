const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Comment = sequelize.define("comments", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  comment: Sequelize.STRING,
});

module.exports = Comment;
