const express = require('express');
const router = express.Router();
const Comment = require("../controllers/comment.controller")

router.post("/post/new",Comment.createComment)


module.exports = router;