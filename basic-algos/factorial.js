var fact = function(n){
    if(n == 0){
        return 1;
    }
    return n * fact(n-1);
}

var n = 5

console.log(fact(n))

//Big-O = O(n)