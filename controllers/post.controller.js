const Post = require('../db/db').Post


module.exports.createpost = async (req,res)=>{
    const result = await Post.create(req.body);
}




//views

module.exports.getCreatePost = (req, res)=>{
    res.render("create-post")
}