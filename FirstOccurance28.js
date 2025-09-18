var strStr = function(haystack, needle) {
    let val=''
    for(i=0;i<=haystack.length-1;i++){
        val+=haystack[i]
    }
   if(val.includes(needle)){
    return val.indexOf(needle)
   }else{
    return -1
   }
};
console.log(strStr('leetcode','code'))