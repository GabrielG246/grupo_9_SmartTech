//REQUIRES//
const path= require('path');
const fs= require("fs");
const session = require("express-session");

const db= require("../database/models");

const controller={
    home: (req,res)=>{
        res.render('index',)
    },
    carrito: async (req,res)=>{
      
            try {
                const carts= await db.Cart.findAll({attributes:{exclude:[]},include:['users']});
                res.json(carts);
                
            } catch (error) {
                res.json(error)
            }
        
    
    }

}

module.exports= controller;

// 'detail': (req, res) => {
//     db.Movie.findByPk(req.params.id,
//         {
//             include : ['genre']
//         })
//         .then(movie => {
//             res.render('moviesDetail.ejs', {movie});
//         });