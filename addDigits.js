var addDigits = function (num) {
    let num2 = String(num).split("")
    if (num2.length == 1) {
        return num
    }
    const [a, b] = num2


    if (num == 10 || (num == 20) ||
        (num == 30) ||
        (num == 40) ||
        (num == 50) ||
        (num == 60) ||
        (num == 70) ||
        (num == 80) ||
        (num == 90)) {
        return c = num2[0] * 1
    }
    let numA = Number(a)
    let numB = Number(b)
    c = (numA + numB)

    let checker = String(c).split("")
    if (checker.length == 1) {
        return c
    }
    else if (checker == 1) {
        return num
    }
    let cToString = String(c)
    let [x, y] = cToString
    let numC = Number(x)
    let numD = Number(y)
    return (numC + numD)


}
console.log(addDigits(39))

