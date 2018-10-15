const express = require("express")
const app = express()
app.get('/', function (req, res) {
  console.log(req, res)
  res.send(`<html><body><div style="color: red">你好呀</div></body></html>`)
})


app.listen(3000, function () {
  console.log("你开启了3000端口")
})