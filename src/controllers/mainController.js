const path= require('path');

const controller={
    home: (req,res)=>{
        res.render('index')
    },
    carrito: (req,res)=>{
        res.render('carrito')
    }

}

module.exports= controller;