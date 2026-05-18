var cartesian = (a,b) => {
    let arr = [];
    for(let i = 0; i < a.length; i++){
        for (let j = 0; j < b.length; j++) {
            let ins = [];
            ins.push(a[i]);
            ins.push(b[j]);
            arr.push(ins);
        }
    }
    return arr;
}

let a = [1, 2]
let b = [3, 4, 5]

console.log(cartesian(a,b));

//Big-O = O(mn)