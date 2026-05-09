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
//Big-O = O(n)

var nfibo = function(n){
    if(n == 1 || n == 0){
        return n;
    }
    return nfibo(n - 1) + nfibo(n - 2)
}
//Big-O = O(2^n)

let n = 6;

console.log(fibo(n).toString());
console.log(nfibo(n).toString());
