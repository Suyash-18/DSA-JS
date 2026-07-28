function secondLargestNumber(arr){
    let max = -Infinity;
    let max2 = -Infinity;

    for(const item of arr){
        if(item > max){
            max2 = max
            max = item;
        }
        if (item > max2 && item != max) {
            max2 = item
        }
    }

    return max2;
}

let arr = [4,9,0,2,8,7,1]

console.log(secondLargestNumber(arr))