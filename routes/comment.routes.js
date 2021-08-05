const express = require('express');
const router = express.Router();
const commentctrl = require("../controllers/comment.controller")

router.post("/comment/new/:id",commentctrl.createComment)


//views


module.exports = router;