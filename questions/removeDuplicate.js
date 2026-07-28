let nums = [0,0,1,1,1,2,2,3,3,4];

let index = 1;

for(let i = 1; i < nums.length; i++){
    if(nums[i] != nums[index-1]){
        nums[index] = nums[i];
        index++
    }
}

console.log(nums)
console.log(index)