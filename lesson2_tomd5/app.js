const express = require("express")
const utility = require("utility")

const app = express()
/*
目的 当在浏览器中访问 http://localhost:3000/?q=alsotang 时，输出 alsotang 的 md5 值，即 bdd5e57b5c0040f9dc23d430846e68a3。
* */

//测试地址 http://localhost:3000/?key=hello
app.get('/', function (req, res) {
  console.log(req.query) // { key: 'hello' }
  const key = req.query.key
  const md5Value = utility.md5(key)
  res.send(md5Value)
})

app.listen(3000, function () {
  console.log("listen on 3000 ...")
})