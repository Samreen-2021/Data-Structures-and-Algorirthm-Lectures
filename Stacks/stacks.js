class Stack{
    constructor(){
        this.items = [];
        this.size = 5;
        
    }
    push(item){
        if(this.items.length+1 >this.size){
            console.log('stack overflow');
        }
        else{
        this.items.push(item);
        }
    }
    pushMethod(item){
        this.items.length=this.items.length+1;
        // for(let i=0; i<this.items.length; i++){
        //     this.items[this.items.length-1]=item;
        // }
        let i= 0;
        while(i<this.items.length){
            this.items[this.items.length-1]=item;
            i++;
        }
        
    }

    pop(){
        if(this.length.items==0){
            console.log('stack is underflow');
        }
        else{
            this.items.pop();
        //  this.size--;
        }
        
    }
    popMethod(){
       this.items.length= this.items.length-1;

        }

    peek(){
        this.items[this.items.length-1];
    }

    isEmpty(){
        if(this.items.length == 0){
            console.log ("true");
        }
        else{
            console.log ("false");
        }
    }
    isFull(){
        if(this.items.length == this.size){
            console.log("true");
        }
        else{
            console.log("false");
        }
    }

    printStack(){
        for(let i=0; i<this.items.length; i++){
        
            console.log(this.items[i]);
        }
    }
} 
let myStack =new Stack();
myStack.push('karachi');
myStack.push('Lahore');
myStack.push('Islamabad');
myStack.pushMethod('wahcantt');
myStack.push('Queeta');
myStack.push('Peshawar');
myStack.isFull();

// myStack.printStack();
// myStack.popMethod();
// myStack.printStack();
// myStack.pop();
// myStack.printStack();
// myStack.peek();
// myStack.printStack();
//myStack.isEmpty();