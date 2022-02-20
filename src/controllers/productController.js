const path= require('path');
const fs= require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller={
    detail: (req,res)=> {
        let searchProduct = products.find(unProducto => unProducto.id == req.params.id);
          
       res.render('productDetail',{searchProduct:searchProduct})
   },
   products: (req,res)=>{
       res.render('products',{products})
   }

}

module.exports= controller;