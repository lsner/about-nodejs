function getReserve(num) {
    let numArray = num.toString().split("");
    numArray.reverse();
    let newNum = numArray.join("");
    return Number(num) + Number(newNum)
}

const a = getReserve(100);
console.log(a);