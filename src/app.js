                // EXPRESS //
const express = require("express");
const app = express();

                    //Paquete path para carpeta public 
const path = require("path");
const publicPath= path.resolve(__dirname,'../public');

                //ROUTERS//
const mainRoutes= require('./routes/main');
const userRoutes= require('./routes/user')
const productRoutes= require('./routes/product');

app.use('/',mainRoutes);
app.use('/',userRoutes);
app.use('/products',productRoutes);

                //Sirve para capturar datos de formulario 
app.use(express.urlencoded({extended: false}));
app.use(express.json()); 


                //Carpeta archivos estaticos
app.use(express.static(path.join(__dirname, '../public'))); 


                // EJS //
app.set("view engine", "ejs");
app.set("views", "./src/views");

                ///Method-Override -Para pisar metodos PUT Y DELETE
const methodOverride=require('method-override');
app.use(methodOverride('_method'));



                //SERVIDOR//
app.listen(3001, ()=>{
    console.log("Servidor corriendo en puerto 3001")
});

