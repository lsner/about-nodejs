function baseUsePromise() {
    let promiseSomething = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(() => resolve(666), 3000)
        })
    }

    promiseSomething().then(function (fulfilled) {
        //当promise状态变成fulfilled时，调用此函数
        console.log("fulfilled", fulfilled)
    }, function (rejected) {
        //当promise状态变成rejected时，调用此函数
        console.log("rejected", rejected)
    }, function (progress) {
        //当返回进度信息时，调用此函数
        console.log("progress", progress)
    });

}

//=================================================================
let fs = require("fs")
let Q = require("q")

function readFile(file) {
    fs.readFile(file, function (err, data) {
        if (err) {
            console.log("报错了兄弟", err)
        } else {
            console.log(data)
        }
    })
}

function testQAll() {
    //q 的 all方法 => promise all 返回的result是个数组
    Q.all([readFile("./package.json"), readFile("./create_server.js")],
        function (result) {
            console.log(result)
        })
}

//=================================================================

let deffer = Q.defer();

function getNewPromise() {
    return deffer.promise;
}

getNewPromise()
    .then(console.log("haha"))
    .then(readFile("./package.json"))





