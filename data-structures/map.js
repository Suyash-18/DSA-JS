const map = new Map([['a', 1], ['b', 2]]);
map.set('c', 3)
map.delete('c')
console.log(map.has('b'))
console.log(map.size)
for (const [key,value] of map) {
    console.log(`${key}: ${value}`)
}
map.set('a', map.get('a')+1)
console.log(map.get('a'));