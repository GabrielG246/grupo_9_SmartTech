//REQUIRES//
const express= require('express');
const multer= require('multer');
const path= require('path');

//LAUNCHERS//
const router= express.Router();

//MULTER SETTINGS//
const storage= multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, path.join(__dirname, "../","../","public/img/productImages"))
    },
    filename: (req, file, cb) =>{
        cb(null, "product-"+Date.now()+path.extname(file.originalname));
    }
})

const upload= multer({storage});

//CONTROLLERS//
const productController= require('../controllers/productController');


router.get("/item/:id", productController.detail);

router.get("/",productController.products)

router.get("/addProduct", productController.newProductGET);

router.post("/addProduct", upload.single("productImage"), productController.newProductPOST);



module.exports= router;