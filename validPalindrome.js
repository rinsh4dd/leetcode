var isPalindrome = function(s) {
    let output=""
    let str=s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    for(i=str.length-1;i>=0;i--){
        output+=str[i].toLowerCase()
    }
  if(str==output){
    return true
  }else{
    return false
  }
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome("0P"))
