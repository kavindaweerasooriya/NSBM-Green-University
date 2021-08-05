//Home
const express = require("express");
const router = express.Router();
const Post = require("../db/db").Post


router.get("/", require("../middleware/isauth"), async (req, res) => {
    const posts = await Post.findAll();
    console.log(posts);
    res.render("index", { "Lol":posts})
})


module.exports = router;