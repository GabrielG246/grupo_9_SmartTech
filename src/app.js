                // EXPRESS //
const express = require("express");
const app = express();


const path = require("path");
const publicPath= path.resolve(__dirname,'../public');

                //ROUTERS//
const mainRoutes= require('./routes/main');
const userRoutes= require('./routes/user')
const productRoutes= require('./routes/product');

app.use('/',mainRoutes);
app.use('/user',userRoutes);
app.use('/product',productRoutes);


                //Carpeta archivos estaticos
app.use(express.static(path.join(__dirname, '../public'))); 


                // EJS //
app.set("view engine", "ejs");
app.set("views", "./src/views");




                //SERVIDOR//
app.listen(3001, ()=>{
    console.log("Servidor corriendo en puerto 3001")
});

