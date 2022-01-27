                // EXPRESS //
const express = require("express");
const app = express();


const path = require("path");
const publicPath= path.resolve(__dirname,'../public');

<<<<<<< HEAD
                //ROUTERS//
const mainRoutes= require('./routes/main');
const userRoutes= require('./routes/user')
const productRoutes= require('./routes/product');
=======
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"))
>>>>>>> 01d84575bc6082a36920712bc120f49089474c9a

app.use('/',mainRoutes);
app.use('/user',userRoutes);
app.use('/product',productRoutes);


<<<<<<< HEAD
                //Carpeta archivos estaticos
app.use(express.static(path.join(__dirname, '../public'))); 


                // EJS //
app.set("view engine", "ejs");
app.set("views", "./src/views");



=======

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./src/views/index.html"))
})

app.get("/carrito.html", (req, res) => {
    res.sendFile(path.resolve("./src/views/carrito.html"))
})

app.get("/producto.html", (req, res) => {
    res.sendFile(path.resolve("./src/views/producto.html"))
})

app.get("/index.html", (req, res) => {
    res.sendFile(path.resolve("./src/views/index.html"))
})

app.get("/login.html", (req, res) => {
    res.sendFile(path.resolve("./src/views/login.html"))
})
>>>>>>> 01d84575bc6082a36920712bc120f49089474c9a

                //SERVIDOR//
app.listen(3001, ()=>{
    console.log("Servidor corriendo en puerto 3001")
});

