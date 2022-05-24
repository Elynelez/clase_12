let express = require("express")
let path = require("path")
let app = express()

app.use(express.static(__dirname + "/public"))
let PORT = process.env.PORT || 3000;

app.listen(PORT, function(){console.log("corriendo puerto")})
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + "/views/home.html"))
})
app.get("/register", function(req, res){
    res.sendFile(path.join(__dirname + "/views/register.html"))
})
app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname + "/views/login.html"))
})