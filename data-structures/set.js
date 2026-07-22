 const set = new Set([1,2,3])
set.add(4)
set.delete(3)
 for (const element of set) {
    console.log(element);
 }
 console.log(set.has(4))
 console.log(set.size)
 set.clear()
 console.log(set)