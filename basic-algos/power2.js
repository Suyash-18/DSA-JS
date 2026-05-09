var power = function(n){
    var comp = 1;
    if(n == 1){
        return true;
    }
    for(var i = 0; i < Math.round(Math.sqrt(n)); i++){
        comp = comp * 2;
        if(comp == n){
            return true;
        }
    }
    return false;
}
//Big-O = O(sqrt(n))

var powerBitWise = function(n){
    if(n < 1){
        return false;
    }
    return (n & (n-1)) === 0;
}
//Big-O = O(1)

var n = 128

console.log(powerBitWise(n));
