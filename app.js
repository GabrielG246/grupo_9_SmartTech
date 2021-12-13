const express = require("express");
const { get } = require("express/lib/response");
const app = express();
const path = require("path");

app.listen(3000, ()=>{
    console.log("Servidor corriendo en puerto 3000")
});

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./views/index.html"))
})

app.get("/carrito.html", (req, res) => {
    res.sendFile(path.resolve("./views/carrito.html"))
})

app.get("/producto.html", (req, res) => {
    res.sendFile(path.resolve("./views/producto.html"))
})
