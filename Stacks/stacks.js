class Stack{
    constructor(){
        this.items = [1, 2,3];
        // this.size = 0;
        
    }
    push(item){
        this.items.push(item);
        // this.size++;
    }

    pop(){
        this.items.pop();
        // this.size--;
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
// myStack.printStack();
// myStack.pop();
// myStack.printStack();
// myStack.peek();
// myStack.printStack();
myStack.isEmpty();