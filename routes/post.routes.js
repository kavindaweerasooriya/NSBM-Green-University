const express = require('express');
const router = express.Router();
const post = require("../controllers/post.controller")

router.post("/post/new",require("../middleware/isauth"),post.createpost)


//views

router.get("/post/new",require("../middleware/isauth"),post.getCreatePost)
router.get("/post/read/:postID",require("../middleware/isauth"),post.readOnePost)


module.exports = router;