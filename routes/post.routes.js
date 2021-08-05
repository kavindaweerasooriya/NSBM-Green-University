const express = require('express');
const router = express.Router();
const post = require("../controllers/post.controller")

router.post("/post/new",post.createpost)


module.exports = router;