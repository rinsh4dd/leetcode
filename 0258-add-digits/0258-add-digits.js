/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
while(num>=10){
    let ans = 0;
    let digits = num.toString().split("")
    for(i=0;i<digits.length;i++){
        ans += Number(digits[i])
    }
    num = ans
}
return num
};
console.log(addDigits(12))