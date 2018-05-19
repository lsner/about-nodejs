const http = require('http');
var https = require('https'); //页面都用https啦

const url = "https://cn.bing.com/";

https.get(url, function (res) {
    var html = "";
    res.on('data', function (data) {
        html = html + data;
    })

    res.on('end', function (data) {
        //把页面搞起来
        http
            .createServer((req, res) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.write(html);
                res.end();
            })
            .listen(3000, '127.0.0.1', function () {
                console.log("可以看到你爬去的页面啦。。。。。")
            });
    })
})



