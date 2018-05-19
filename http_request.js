const http = require("http");
const qs = require("queryString");

//我们需要发送的数据（用来水评论的数据）
const postData = qs.stringify({
    content: "哇塞。。你说的是什么啊。。" //打算添加的评论
})

const options = {
    "hostname": "my.oschina.net",
    "port": 80,
    "path": "/action/blog/add_comment?blog=1813647",
    "method": "POST",
    "headers": { //扒取开源中国 评论请求的request header
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        "Connection": "keep-alive",
        "Content-Length": postData.length,
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Cookie": "aliyungf_tc=AQAAABCwOh4iSQIAlvPaZ8VkizD31HVR; _user_behavior_=24d2f556-5469-46d8-9228-4562a9bb4b77; oscgitee-session=BAh7CEkiD3Nlc3Npb25faWQGOgZFVEkiJTgzYjVlMmZkNzk1Yjk5NmRmNjk3NTMyZmQ2MWQ0YmExBjsAVEkiF21vYnlsZXR0ZV9vdmVycmlkZQY7AEY6CG5pbEkiEF9jc3JmX3Rva2VuBjsARkkiMU9VMUZhSmJLcm1TZVNBVHpZeDBrTDRJeVVYU285MWI3cEVKdG1qZ3RzNG89BjsARg%3D%3D--1c6840cc285aa3ff6b3be133be27d8e72899bccc; oscid=MOhNlxr7I%2Fy9Hm3BBzn6a8bciq7FcpDeuWr8QrgaE17RdcotRBKNoVI9%2BrevgboO3BGm9snonjTd%2BxSJbxWuNMjg5sOQfhf4h05WWcguVOh7ZmTSlDEnpKC456Qs9oScttbOILqHMM2xz9F8Qxo619GWRFkZxL6V; Hm_lvt_a411c4d1664dd70048ee98afe7b28f0b=1526188669,1526540316,1526545807; Hm_lpvt_a411c4d1664dd70048ee98afe7b28f0b=1526718471; visit-gitee-osc_scr0520=1",
        "Host": "my.oschina.net",
        "Origin": "https://my.oschina.net",
        "Referer": "https://my.oschina.net/u/3607067/blog/1813647",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.170 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest"
    }
}


const req = http.request(options, function (res) { //参数  配置，回调
    console.log(res.statusCode)
    res.on("data", function (data) {

    })
    res.on("end", function () {
        console.log("请求完毕")
    })

})

req.on("error", function (error) {
    console.log("Error：", error.message)
})
req.write(postData);
req.end();