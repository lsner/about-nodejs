const normalFetch = function (promiseRequest,limitTime) {
    const timeoutFn = new Promise(function (reject) {
        setTimeout(() => reject('你超时了'),limitTime)
    })

    let abortPromiese = Primise.race([promiseRequest, timeoutFn])

    return abortPromiese
}


/* 
Promise.race 返回的是最先有结果的那个promise 无论结果是resolve 还是 reject
Prpmise.all 依次执行，如果都成功则返回一个resolve的list 但只要有一个reject 后面的都不会执行 并且会返回reject的error message
*/