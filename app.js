let express = require("express")
let path = require("path")
let app = express()
app.use(express.static(__dirname + "/public"))
let puerto = process.env.puerto || 3000

app.listen(puerto, function(){console.log("corriendo puerto")})
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + "/views/home.html"))
})