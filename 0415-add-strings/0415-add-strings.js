var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let ans = [];

    while (i >= 0 || j >= 0 || carry > 0) {
        let n1 = i >= 0 ? +num1[i] : 0;
        let n2 = j >= 0 ? +num2[j] : 0;

        let sum = n1 + n2 + carry;
        carry = Math.floor(sum / 10);
        ans.push(sum % 10);

        i--;
        j--;
    }
     return ans.reverse().join('');

}