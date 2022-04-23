                // EXPRESS //
const express = require("express");
const path = require("path");
const methodOverride=require('method-override');


//ROUTERS//
const mainRoutes= require('./routes/main-routes');
const userRoutes= require('./routes/user-routes')
const productRoutes= require('./routes/product-routes');


const app = express();

// EJS //
app.set("view engine", "ejs");
app.set("views", "./src/views");

//Sirve para capturar datos de formulario 
app.use(express.urlencoded({extended: false}));
app.use(express.json());

///Method-Override -Para pisar metodos PUT Y DELETE
app.use(methodOverride('_method'));

//Paquete path para carpeta public 
const publicPath= path.resolve(__dirname,'../public');



//Carpeta archivos estaticos
app.use(express.static(path.join(__dirname, '../public'))); 

app.use('/',mainRoutes);
app.use('/',userRoutes);
app.use('/products',productRoutes);


//SERVIDOR//
app.listen(3005, ()=>{
console.log("Servidor corriendo en puerto 3005")
});