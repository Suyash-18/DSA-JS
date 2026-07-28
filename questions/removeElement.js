let nums = [0,1,2,2,3,0,4,2];
let val = 2;

let index = 0;

for(let i = 0; i < nums.length; i++){
    if(val != nums[i]){
        nums[index] = nums[i];
        index++;
    }
}

console.log(nums)
console.log(index)