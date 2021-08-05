const express = require('express');
const router = express.Router();
const post = require("../controllers/post.controller")

router.post("/post/new",post.createpost)


//views

router.get("/post/new",post.getCreatePost)


module.exports = router;