// EXPRESS //
const express = require("express");
const app = express();

//REQUIRES
const session= require('express-session');

        //PUBLIC SETTING 
const path = require("path");
const publicPath= path.resolve(__dirname,'../public');

        //ROUTERS//
const mainRoutes= require('./routes/main-routes');
const userRoutes= require('./routes/user-routes')
const productRoutes= require('./routes/product-routes');

//MIDDLEWARES
app.use(session({secret:'Secret data from session'}));

        //FORMS SETTINGS 
app.use(express.urlencoded({extended: false}));
app.use(express.json()); 

//ROUTES
app.use('/',mainRoutes);
app.use('/users',userRoutes);
app.use('/products',productRoutes);


                //Carpeta archivos estaticos
app.use(express.static(path.join(__dirname, '../public'))); 


                // EJS //
app.set("view engine", "ejs");
app.set("views", "./src/views");

                ///Method-Override -Para pisar metodos PUT Y DELETE
const methodOverride=require('method-override');
app.use(methodOverride('_method'));



                //SERVIDOR//
app.listen(3005, ()=>{
    console.log("Servidor corriendo en puerto 3005")
});

