var mergeStort = (arr) => {
    if(arr.length < 2){
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    var larr = arr.slice(0, mid);
    var rarr = arr.slice(mid);
    mergeStort(larr), mergeStort(rarr);
    return merge(larr,rarr)
    
}

var merge = (larr, rarr) => {
    let sorted = [];
    while(larr.length && rarr.length){
        if(larr[0] <= rarr[0]){
            sorted.push(larr.shift())
        }else{
            sorted.push(rarr.shift())
        }
    }
    return [...sorted, ...larr, ...rarr]
}


let arr = [8, 20, -6, -2, 4];


console.log(mergeStort(arr));