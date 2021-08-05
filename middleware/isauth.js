module.exports = (req, res, next) => {
        if(req.session.isAuth!==undefined && req.session.isAuth){
            next();
        }else{
            res.render("login")
        }
}