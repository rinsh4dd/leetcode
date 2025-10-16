/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const sign = x < 0 ? -1 : 1;
  let str = Math.abs(x).toString().split("").reverse().join("");
  let ans = sign * Number(str);
  if (ans < -(2**31) || ans > 2**31 - 1) return 0;       
  return ans
};
console.log(reverse(112));
