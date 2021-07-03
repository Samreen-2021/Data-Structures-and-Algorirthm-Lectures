let array = [1, 92, 3, 55, 235]

console.log(array.length);
// for(let i=0; i<array.length; i++){
//     console.log(array[i])
// }
// function addAtEnd(element){
//     array.push(element);
    
// }
// console.log(array)
// addAtEnd(423);
// function addAtStart(item){
//     array.unshift(item);
// }
// addAtStart(658);
// console.log(array);
// addAtEnd(456);
// addAtStart(0);
// console.log(array);

// function insertAtEnd(newItem){
// array.length =array.length+1;
// array[array.length-1]= newItem;
// }
// insertAtEnd(-789);
// console.log(array);

function insertAtStart(newElement){
    array.length =array.length+1;
        for(let i=array.length-1; i>0; i-- ){
            array[i]= array[i-1];
          
                // console.log(array[i]);
     }
     array[0] = newElement ;
    }
    insertAtStart(98652);
    console.log(array);