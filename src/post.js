var http = require('http')
var url = require("url")
var qs = require("querystring")

http.createServer(function (req, res) {
    if (url.parse(req.url).pathname === '/upload') {
        var data = null
        req.setEncoding("utf8"); //这个很重要不然拿到的数据就是chunk就是 buffer
        req.addListener("data", function (chunk) {
            console.log(chunk)
            data = qs.parse(chunk)
            console.log(data)
            // called when a new chunk of data was received

            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(`
                <html>
                <body>
                    <p>${data && data.info}</p>
                </body>
                
                </html>    
            `)
            res.end()
        });

        req.addListener("end", function () {
            // called when all chunks of data have been received
        });

    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(`
            <html>
            <body>
                <form action="/upload" method="post">
                    <textarea name="info"></textarea>
                    <button type="submit">post</button>
                </form>
            </body>
            
            </html>    
        `)
        res.end()
    }

}).listen('8888', function () {
    console.log("服务器8000端口启动……")
    console.log("test")
})

