const db = require("../database/models")

function rememberMe(req, res, next){

    if(res.cookie.rememberMe != undefined && req.session.userLogged==undefined){
        db.User.findOne( { where: {username: res.cookie.rememberMe} } )
        .then(function(user){
            delete user.password;
            session.userLogged= user;
        })
    }

    next()
}

module.exports= rememberMe