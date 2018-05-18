function splitArray(str) {
    let resetArray = []
    let flagIndex = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            resetArray.push(str.slice(flagIndex, i + 1))
            flagIndex = i + 1
        }
    }
    let sum = 0
    resetArray.map(function (item) {
        sum = sum + item.length
    })
    return (sum / resetArray.length).toFixed(2)
}

const a = splitArray("aaabbaaac")
console.log(a)