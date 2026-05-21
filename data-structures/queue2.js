class Queue{
    constructor(){
        this.items = {},
        this.rear = 0,
        this.front = 0
    }
    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }
    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
    }

    isEmpty(){
        if(this.rear - this.front == 0){
            return true
        }
        return false
    }
    size(){
        return this.rear - this.front
    }
    print(){
        console.log(this.items)
    }
}

const queue = new Queue
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
queue.dequeue()
queue.print()