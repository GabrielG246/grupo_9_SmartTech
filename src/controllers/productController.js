const path= require('path');
const fs= require('fs');
const { fileURLToPath } = require('url');
const { stringify } = require('querystring');

const productsFilePath = path.join(__dirname, '../data/products.json');
const productsJSON= fs.readFileSync(productsFilePath, 'utf-8');
const productsDB= JSON.parse(productsJSON);


const controller={
    detail: (req,res)=> {
        let searchProduct = productsDB.find(unProducto => unProducto.id == req.params.id);
          
       res.render('productDetail',{product: searchProduct})
   },
   products: (req,res)=>{
       res.render('products',{productsDB})
   },
   newProductGET: (req, res)=> {
       res.render("product-create_form");
   },
   newProductPOST: (req, res)=> {

       const newProduct= {
           id: (productsDB.length),
           name: req.body.productName,
           description: req.body.productDescription,
           image: req.file.filename,
           colors: req.body.productColor,
           price: req.body.productPrice,
           info: req.body.productSpecs
        }

        productsDB.push(newProduct);
        const dataProcess= JSON.stringify(productsDB);
        fs.writeFileSync(productsFilePath, dataProcess, "utf-8");
        
        res.redirect("/products");
   } 

}

module.exports= controller;