const path = require("path");

const express = require("express");
// const bodyParser = require("body-parser");

const sequelize = require("./util/database");
const Post = require("./models/post");
const Comment = require("./models/comments");

const app = express();
app.use(express.json());

const postRoutes = require("./routes/posts");

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(postRoutes);

app.get("/", (req, res) => {
  res.sendFile("public", "index.html");
});
Comment.belongsTo(Post, { constraints: true, onDelete: "CASCADE" });
Post.hasMany(Comment, { as: "comments", foreignKey: "postId" });

sequelize
  // .sync({ force: true })
  .sync()
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
