var moveZeroes = function(nums) {
    let zeroes=[]
    let nonZeroes=[]
    for(i=0;i<nums.length;i++){
        if(nums[i]===0){
            zeroes.push(nums[i])
        }else{
            nonZeroes.push(nums[i])
        }
    }
    let final=[...nonZeroes,...zeroes]
    for(i=0;i<nums.length;i++){
        nums[i]=final[i]
    }
};
console.log(moveZeroes([0,1,0,3,12]))