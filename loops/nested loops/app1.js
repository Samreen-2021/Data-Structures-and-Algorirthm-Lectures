/*let i = 0;
while (i <= 2) {
  console.log("- First level loop");
  i++;
  let j = 0;
  while (j <= 3) {
    console.log("-- Second level loop");
    j++;
  }
}
let array = [[1,2], [3, 4], [5,6,7]];
for(let i=0; i<array.length; i++){
    for(let j=0; j<array[i].length; j++){
        console.log(array[i][j]);
    }
}*/
// now using while loop
let arr = [[0,1,2], [3, 4], [5,6,7]];
let i=0;
while(i< arr.length){
    let j=0;
    while(j<arr[i].length){
        console.log(arr[i][j]);
        j++;
    }
    i++;     
}
