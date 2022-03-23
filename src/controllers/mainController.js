//REQUIRES//
const path= require('path');
const fs= require("fs");

//DATA BASE//
const productDBpath= path.join(__dirname, "../", "data/products.json");
const productDBjson= fs.readFileSync(productDBpath, "utf-8");
const productDB= JSON.parse(productDBjson);


const controller={
    home: (req,res)=>{
        res.render('index', {productDB})
    },
    carrito: (req,res)=>{
        res.render('carrito' ,{productDB})
    }

}

module.exports= controller;