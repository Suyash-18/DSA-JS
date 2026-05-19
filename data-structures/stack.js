class Stack {
    constructor (){
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        this.items.pop();
    }
    isEmpty(){
        if(this.items.length == 0){
            return true;
        }
        return false
    }
    print(){
        console.log(this.items)
    }
    peek(){
        return this.items[this.items.length - 1]
    }
}

const stack = new Stack

stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.isEmpty())
console.log(stack.peek())
stack.print();
stack.pop();
console.log(stack.peek())
stack.print();