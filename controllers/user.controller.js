const User = require("../db/db").User
const argon2 = require('argon2');

const { v4: uuidv4 } = require('uuid');



exports.login = async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);
}

exports.register =  async (req,res,next)=>{
    req.body.UserID = uuidv4(); 
    try {
        const result = await User.create(req.body);
        console.log(result);
    } catch (error) {
        console.log(result);
    }
    console.log("saving session")
    req.session.isAuth = true;
    res.redirect("/")
}





//views
exports.getLogin = (req, res)=>{
    res.render("login");
}

exports.getRegister = (req, res)=>{
    res.render("register");
}