function lsearch(arr, s, e, target) {
    for (let i = s; i <= e; i++) {
        if(target == arr[i]){
            return i;
        }       
    }
    return -1;
}

let arr = [2,4,3,7,5]

console.log(lsearch(arr, 0, 4, 5));