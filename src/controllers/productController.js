const path= require('path');
const fs= require('fs');
const { fileURLToPath } = require('url');
const { stringify } = require('querystring');
const db= require('../database/models');
const session = require("express-session");

// const productsFilePath = path.join(__dirname, '../data/products.json');
// const productsJSON= fs.readFileSync(productsFilePath, 'utf-8');
// const productsDB= JSON.parse(productsJSON);


 const controller={
//     detail: (req,res)=> {
//         let searchProduct = productsDB.find(unProducto => unProducto.id == req.params.id);
          
//        res.render('productDetail',{product: searchProduct})
//    },
//    products: (req,res)=>{
//        res.render('products',{productsDB})
//    },
    newProductGET: (req, res)=> {
        res.render("product-create_form");
    },
    newProductPOST: (req, res)=> {

        db.Products.create({
            name: req.body.productName,
            price: req.body.productPrice,
            description: req.body.productDescription,
            specifications: req.body.productSpecs,
            color: req.body.productColor
        })
        
        res.redirect("/products");
 },

    pruebaStock: (req,res)=>{

        db.Products.findAll()
        .then(product=>{
            res.send({product:product})
        })
    }
}

module.exports= controller;