
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./views");


app.listen(3001, ()=>{
    console.log("Servidor corriendo en puerto 3001")
});

app.use(express.static("../public"))

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./views/index.html"))
})

app.get("/carrito.html", (req, res) => {
    res.sendFile(path.resolve("./views/carrito.html"))
})

app.get("/producto.html", (req, res) => {
    res.sendFile(path.resolve("./views/producto.html"))
})

app.get("/index.html", (req, res) => {
    res.sendFile(path.resolve("./views/index.html"))
})

app.get("/login.html", (req, res) => {
    res.sendFile(path.resolve("./views/login.html"))
})


