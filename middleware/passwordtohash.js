const argon2 = require("argon2");

module.exports = async (req,res , next)=>{
   
    const password = req.body.Password;
    const passwordhash = await argon2.hash(password);
    req.body.Password = passwordhash;  
    next();
}