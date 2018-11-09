var http = require('http');
var url = require('url');
var qs = require('querystring')
var exec = require('child_process').exec


var server = http.createServer(function(req,res){
   res.writeHead(200,{"Content-Type":"text/plain"}) 
   res.write("lsner")
   res.end()

   exec('ls -lah',function(error, stdout, stderr){
        console.log("stdout",stdout)
   })
})

server.listen(8888,function(){
    console.log("hahahah 开始了")
})

var path = 'localhost:3000/lsner?id=123&name=zhangsan'
console.log(url.parse(path))
console.log(qs.parse(url.parse(path).query))



