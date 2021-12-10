const express= require("express");
const app= express();
const path= require("path");

app.listen(3000, ()=> {
    console.log("Server is running in port: 3000")
});

app.use(express.static("public"));

app.get("/" ,(req, res) => {
    res.sendFile(path.resolve("./views/index.html"))
})