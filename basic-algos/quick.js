var quick = (arr) =>{
    if(arr.length < 2){
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }

    console.log("Pivot: ", pivot);

    return [...quick(left), pivot, ...quick(right)]

}

let arr = [8, 20, -6, -2, 4];


console.log(quick(arr));

//Average Complexity = O(nlog(n))