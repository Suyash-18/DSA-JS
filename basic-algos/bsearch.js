function bsearch(arr, s, e, t){
    while(s <= e){
        let mid = Math.floor((s + e) / 2);
        if(t == arr[mid]){
            return mid;
        }
        if(t > arr[mid]){
            s = mid + 1;
        }else{
            e = mid - 1;
        }
    }
    return -1;
}

var rbsearch = function(arr, s, e, t) {
    let mid = Math.floor((s + e) / 2);
    if(t == arr[mid]){
        return mid;
    }
    if(s >= e){
        return -1;
    }
    if(t > arr[mid]){
        return rbsearch(arr, mid + 1, e, t);
    }else{
        return rbsearch(arr, s, mid - 1, t);
    }
}

let arr = [2,5,9,13,17];

console.log(rbsearch(arr, 0, 4, 13));