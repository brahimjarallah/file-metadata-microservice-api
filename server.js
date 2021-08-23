var express = require("express")
var cors = require("cors")
require("dotenv").config()

var app = express()

app.use(cors())
app.use("/public", express.static(process.cwd() + "/public"))

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html")
})

const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log("Your app is listening on port " + port)
})

let multer = require("multer")

app.post("/api/fileanalyse", multer().single("upfile"), (req, res) => {
  console.log(req.file)
  let respObj = {}
  respObj["name"] = req.file.fieldname
  respObj["type"] = req.file.mimetype
  respObj["size"] = req.file.size
  res.json(respObj)
})
