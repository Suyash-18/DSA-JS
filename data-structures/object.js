const obj = {
    name: "Pruce yaein",
    age: 21,
    'key-three': true,
    sayMyName: function() {
        console.log(this.name)
    }
}
console.log(obj)
console.log(obj.name)
console.log(obj['age'])
console.log(obj['key-three'])
obj.hobby = 'music'
obj.sayMyName()
console.log(obj)
delete obj.age
console.log(obj)

//Object.keys(), .values(), entries();