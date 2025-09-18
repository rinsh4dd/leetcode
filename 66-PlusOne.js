var plusOne = function(digits) {

    let val = digits.join("")
    let num = BigInt(val)
    num+=1n;
    let result = num.toString()
    return result.split("").map((d)=>Number(d))
};
console.log(plusOne([100000000000000]))