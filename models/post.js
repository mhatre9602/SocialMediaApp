const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Post = sequelize.define("posts", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  imageUrl: Sequelize.STRING,
  description: Sequelize.STRING,
});

module.exports = Post;
