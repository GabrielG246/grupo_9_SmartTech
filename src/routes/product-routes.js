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


router.get("/item/:id", productController.detail); // Detalle de producto 

router.get("/edit/item/:id", productController.edit); // Formulario de edicion de producto

router.put("/edit/item/:id", productController.update); // Accion de formulario de edicion [PUT]

router.get("/addProduct", productController.newProductGET); // Ruta para crear producto 

router.post("/addProduct", upload.single("productImage"), productController.newProductPOST); //// Ruta para crear producto [POST]

router.get("/delete/item/:id", productController.delete); // Formulario para eliminar producto

router.delete("/delete/item/:id", productController.destroy);// Accion de eliminado 


router.get("/",productController.products) // Listar todos los productos 

router.get("/search", productController.search); // Lista la busqueda del usuario 


module.exports= router;