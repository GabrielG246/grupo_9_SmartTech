const express= require('express');
const session = require('express-session');
const db= require('../database/models');

function userIsAdmin(req, res, next){

    if(session.userLogged != undefined){
        db.User.findOne({where: {username: session.userLogged.username}})
        .then(function(user){
            if(user.roles_id==1){
                res.redirect('/')
            } else{
                next()
            }
        })
    } else {
        res.redirect('/')
    }

}

module.exports= userIsAdmin;