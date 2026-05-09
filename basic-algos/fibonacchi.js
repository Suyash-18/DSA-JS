var fibo = function (n) {
    var arr = Array(n);

    for (let i = 0; i < n; i++) {

        if(i == 0 || i == 1){
            arr[i] = i;
        }else{
            arr[i] = arr[i-1] + arr[i-2];
        }

        
    }

    return arr;
}

let n = 7;

console.log(fibo(n).toString());