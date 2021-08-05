const User = require("../db/db").User
const argon2 = require('argon2');

exports.login = async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
}

exports.register = (req,res)=>{
    const result = await User.create(req.body);
 

}