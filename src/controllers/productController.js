const path= require('path');
const fs= require('fs');
const { fileURLToPath } = require('url');
const { stringify } = require('querystring');
const db= require('../database/models');
const session = require("express-session");

const {Op} = require("sequelize");


 const controller={

    search: (req,res)=>{
        let userSearch= req.query.search
        db.Products.findAll({
            where:{
            name:{[Op.like]:`%${userSearch}%`}
            }
        })
        .then((product)=>{
            res.render('products',{product:product})
        })
        .catch((error)=>{
            res.send(error)
        })

    },
    detail: (req,res)=> {
        db.Products.findByPk(req.params.id)
        .then(product=>{
        res.render('productDetail',{product:product})
    })
        .catch((error=> res.send(error)))
   },
   products: (req,res)=>{

    db.Products.findAll()
    .then(product=>{
        res.render('products',{products:product})
    })
    .catch((error=> res.send(error)))

   },
    newProductGET: (req, res)=> {
        res.render("product-create_form");
    },
    newProductPOST: (req, res)=> {
        
        db.Products.create({
            name: req.body.productName,
            price: req.body.productPrice,
            description: req.body.productDescription,
            specifications: req.body.productSpecs,
            color: req.body.productColor,
            image: req.file.filename
        })
        
        .then(()=>{
            res.redirect("/products");
        })
        .catch((error)=>{
            res.send(error)
        })
            
 },

    edit: (req,res)=> { 
        db.Products.findByPk(req.params.id)
        .then(product=>{
            
            res.render('product-edit-form', {productEdit:product})
        })
        .catch(error=>{
            res.send(error)
        })
    },

    update: (req,res) => {
        
        db.Products.update({

            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            color: req.body.color,
            specifications: req.body.specs

        },
        {
            where: {id: req.params.id}
        })
        
        .then(()=>{
            res.redirect("/products")
        })
        .catch((error=> res.send(error)))

    },

    delete: (req,res)=>{
        db.Products.findByPk(req.params.id)
        .then((product)=>{
            res.render('productDelete',{product:product})
        })
        .catch((error=> res.send(error)))
        
    },
    destroy: (req,res)=>{

        db.Products.destroy({where: {id: req.params.id}, force: true}) // // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            res.redirect("/products")
        })
        .catch((error=> res.send(error)))



    }



}

module.exports= controller;