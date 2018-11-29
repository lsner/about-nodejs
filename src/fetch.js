const normalFetch = function (promiseRequest,limitTime) {
    const timeoutFn = new Promise(function (reject) {
        setTimeout(() => reject('你超时了'),limitTime)
    })

    let abortPromiese = Primise.race([promiseRequest, timeoutFn])

    return abortPromiese
}
