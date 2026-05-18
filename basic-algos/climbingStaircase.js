function climbingStaircase(stairs) {
    if(stairs == 1 || stairs == 2){
        return stairs;
    }
    return climbingStaircase(stairs - 1) + climbingStaircase(stairs - 2)
}

let stairs = 3
console.log(climbingStaircase(stairs))