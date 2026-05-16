var bubble = function(arr, s, e){
    let swap;
    do {
        swap = false
        for(let i = s; i < e; i++){
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i + 1] = temp;
                swap = true;
            }
        }    
    } while (swap);

}

let arr = [-6, 20, 8, -2, 4];

bubble(arr, 0, arr.length - 1);

console.log(arr);

//Big O = O(n^2)