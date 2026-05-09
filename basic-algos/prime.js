var prime = function (n){
    if(n == 2){
        return true;
    }
    for(var i = 2; i < Math.sqrt(n); i++){
        
        if(n % i == 0){
            return false
        }
    }
    return true;

}

var n = 13

console.log(prime(n));

//Big-O = O(sqrt(n))