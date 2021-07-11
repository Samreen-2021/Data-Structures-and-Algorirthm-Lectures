class Queue{
    constructor(){
        this.items = [];
        this.size =5;

    }
    // enqueue function
    enqueue(item)
    {    
    // adding element to the queue
        if(this.items.length+1 > this.size){
            console.log('Queue overflow');
            }
        else{
            this.items.push(item);
            }
    }
    enqueueMethod(item){
        this.items.length= this.items.length+1;
        this.items[this.items.length-1]=item;
    }

    dequeue()
    {
    // removing element from the start of queue
        if(this.items.length==0){
            console.log("Queue is underflow");
        }
        else{
            this.items.shift();
        }   
    }
    dequeueMethod()
    {
         for(let i=0; i<this.items.length; i++){
             this.items[i]= this.items[i+1];
        }
        this.items.length=this.items.length-1;
        // let i= 0;
        // while(i<this.items.length){
        //     this.items[i]= this.items[i+1];
    //     i++;
    //   }
    //     this.items.length=this.items.length-1;
    }
    peek()
    {
        console.log(this.items[0]);
    }
    isEmpty()
    {
        if(this.items.length == 0){
            console.log("true");
        }
        else{
            console.log("false");
        }
    }
    isFull()
    {
        if(this.items.length == this.size){
            console.log("true");
        }
        else{
            console.log("false");
        }

    }
    clear()
    {
        this.items= [];
        this.size = 0;
    }
    toString()
    {
        let str = this.items.toString();
        console.log(str);
    }
    printQueue()
    {
        for(let i=0; i< this.items.length; i++){
            console.log(this.items[i]);
        }
    }
}
let myQueue = new Queue();
myQueue.enqueue("a");
myQueue.enqueue("b");
myQueue.enqueue("c");
myQueue.enqueueMethod('d');
myQueue.enqueueMethod('e');
myQueue.enqueue('f');
// myQueue.printQueue();
// myQueue.dequeue();
// myQueue.printQueue();
// myQueue.isEmpty();
// myQueue.peek();
// myQueue.isFull();
// myQueue.dequeueMethod();

// myQueue.clear();
// console.log(myQueue);
// myQueue.toString();
