const express= require('express')
const session= require('express-session')

function userIsLogged(req, res, next){

    if(session.userLogged != undefined){
        res.redirect('/users/profile')
    } else {
        next()
    }
}

module.exports= userIsLogged;