const express = require("express")
const app = express()
let port = 4000
let path = require("path")
app.listen(port, () =>console.log(`Port running in ${port}\nAbrir en el navegador http://localhost:${port}`))


app.use(express.static("public"))


app.get("/", (req, res )=>{
    res.sendFile(path.join(__dirname,"/views/index.html"))
    })













    
