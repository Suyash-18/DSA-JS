class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        this.items.shift();
    }
    isEmpty(){
        if(this.items.length != 0){
            return false;
        }
        return true;
    }
    print(){
        console.log(this.items);
    }
}

const queue = new Queue;
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
queue.dequeue();
queue.print();