const path = require("path");

const express = require("express");

const postController = require("../controllers/posts");

const router = express.Router();

router.get("/get-posts", postController.getPosts);

router.post("/create-post", postController.createPost);

router.post("/create-comment", postController.createComment);

module.exports = router;
