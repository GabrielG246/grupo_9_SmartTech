//REQUIRES//
const path= require('path');
const fs= require("fs");
const session = require("express-session");

const db= require("../database/models");

const controller={
    home: async (req,res)=>{
        try {
            let products= await db.Products.findAll()

            // Esta función sirve para "mezclar" los indices del array que trae todos los productos
            const productMix= products =>{
                for (let i= products.length -1 ; i > 0 ; i--){
                    let randomIndex= Math.floor(Math.random() * (i + 1));
                    let temporary= products[i];
                    products[i]= products[randomIndex];
                    products[randomIndex]= temporary;
                }
            }
            // Acá ejecuta la función y mezcla los productos
            productMix(products)

            // Nuevo array vacio donde se va a pushear los primeros 4 productos aleatorios que lleguen 
            let mixedProducts= [];
            
            // En este for se itera sobre el array ya "mezclado" y pushea los 4 primeros productos aleatorios
            for (let index = 0; index < 4 ; index++) {
                mixedProducts.push(products[index])
                
            }
            //se envia a la vista el nuevo array con los 4 productos
            res.render('index',{userLogged: req.session.userLogged,products:mixedProducts})

        } catch(error){
            res.json(error)
        }
        
    },
    carrito: async (req,res)=>{
      
            try {
                const carts= await db.Cart.findAll();
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
















            
    

       
    