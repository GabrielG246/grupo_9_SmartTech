//REQUIRES//
const express= require('express');
const multer= require('multer');
const path= require('path');

//LAUNCHERS//
const router= express.Router();

//CONTROLLERS//
const apiProductController= require("../../controllers/api/productController");

//RUTAS

router.get("/api/products/:id", apiProductController.detail); // API  Detalle de producto 

router.get("/api/products", apiProductController.products) // API de todos los productos



module.exports= router;