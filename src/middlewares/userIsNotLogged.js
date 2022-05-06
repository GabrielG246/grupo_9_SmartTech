const express= require('express')
const session= require('express-session')

function userIsNotLogged(req, res, next){

    if(session.userLogged == undefined){
        res.redirect('/users/login')
    } else {
        next()
    }
}

module.exports= userIsNotLogged;