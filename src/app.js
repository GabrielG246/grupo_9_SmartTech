// EXPRESS //
const express = require("express");
const app = express();

//REQUIRES
const session= require('express-session');

        //PUBLIC SETTING 
const path = require("path");
const methodOverride=require('method-override');

        //ROUTERS//
const mainRoutes= require('./routes/main-routes');
const userRoutes= require('./routes/user-routes')
const productRoutes= require('./routes/product-routes');

//APIS
const apiProductRoutes= require("./routes/api/product-routes");
const apiUserRoutes= require("./routes/api/user-routes");

//MIDDLEWARES
app.use(session({
        secret:'Secret data from session',
        resave: true,
        saveUninitialized: true
        }));


//Sirve para capturar datos de formulario 
app.use(express.urlencoded({extended: false}));
app.use(express.json());

        // EJS //
app.set("view engine", "ejs");
app.set("views", "./src/views");


///Method-Override -Para pisar metodos PUT Y DELETE
app.use(methodOverride('_method'));




//Carpeta archivos estaticos
app.use(express.static(path.join(__dirname, '../public'))); 

//ROUTES
app.use('/',mainRoutes);
app.use('/users',userRoutes);
app.use('/products',productRoutes);
app.use(apiProductRoutes);
app.use(apiUserRoutes);

//SERVIDOR//
app.listen(3005, ()=>{
console.log("Servidor corriendo en puerto 3005")
});