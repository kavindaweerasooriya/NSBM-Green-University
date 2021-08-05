const Post = require('../db/db').Post
const { v4: uuidv4 } = require('uuid');


module.exports.createpost = async (req,res)=>{
    currentUser = req.session.user.UserID;
    req.body.UserUserID = currentUser 
    req.body.PostId = uuidv4(); 
    try {
        const result = await Post.create(req.body);
        res.redirect("index")
    } catch (error) {
        
    }
}





//views

module.exports.getCreatePost = (req, res)=>{
    res.render("create-post")
}

module.exports.readOnePost = async (req, res)=>{
    console.log(req.params);
    const postId = req.params.postID;
    const post = await Post.findOne({where : {PostId : postId}})
    res.render("read-post",{"post":post});
}
