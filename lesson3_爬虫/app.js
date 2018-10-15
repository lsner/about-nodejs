const express = require("express")
const https = require("https")

const app = express()

app.get('/', function (req, res) {
  https.get('https://www.ximalaya.com/youshengshu/',function (rs) {
    rs.on("data",function (data) {
      res.send(data)
    })
  })
})

app.listen(3000, function () {
  console.log("app listening 3000")
})