const User = require("../db/db").User
const argon2 = require('argon2');
const { v4: uuidv4 } = require('uuid');

exports.login = async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body);
    if(!email && !password){
        return res.redirect("/user/login")
    }

    const user  = await User.findOne({where : {email:email}})
    if(!user){
        return res.redirect("/user/register");
    }
    if (await argon2.verify(user.Password, password)){
        req.session.isAuth = true;
        req.session.user = user;
        return res.redirect("/")
    }
    return res.redirect("/user/login",{"error":true})
}


exports.register =  async (req,res,next)=>{
    req.body.UserID = uuidv4(); 
    try {
        const result = await User.create(req.body);
        res.redirect("/user/login")
        console.log(result);
    } catch (error) {
        console.log(result);
    }
  
}





//views
exports.getLogin = (req, res)=>{
    res.render("login");
}

exports.getRegister = (req, res)=>{
    res.render("register");
}

exports.getProfile = (req,res)=>{
    const user = req.session.user;
    user.Password = ""
    res.render("profile", {"user":user})
}