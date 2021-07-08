//Suppose you have an array of objects:

	let books = [
        {name: 'The Lean Startup',
			topics: ['entrepreneurship','startups'],
		},
		{
			name: 'War and Peace',
			topics: ['peace', 'politics'],
		},
		{
			name: 'book1',
			topics: ['entrepreneurship', '2']
		},
		{
			name: 'book2',
			topics: ['3', '4']
		}
	
	];
        // console.log(books[0].name);
		// console.log(books[0].topics);
        // console.log(books[1].name);
		
		// console.log(books[1].topics);
		//how to access nested array in an array of objects
		 /*for(let i=0; i< books.length; i++){
			//console.log(books[i].name);
			for(j=0; j<books.length; j++){
				console.log((books[i].topics)[j]);
			}

		}*/


// Now you need to print the name and topics separately, how would you do that?
//Take the above array of objects and add a book of your choice to it with the same properties.


//at end

/*books.length= books.length+1;
books[books.length-1]= {name: 'Quran', topics: ['faith', 'equality']};
console.log(books);*/


// at start
/*books.length= books.length+1;
for(let i=books.length-1; i> 0; i--){
	books[i]=books[i-1];
}
books[0]= {name: 'Quran', topics: ['faith', 'equality']};
console.log(books);*/

//Again consider the above array of objects, and delete one of the objects that represent a book.

// delete an item from end
/*books.length = books.length-1;
console.log(books);*/ 

//delete item from start
/*for(let i = 0; i<books.length-1; i++){
    books[i] =books[i+1];
}
books.length= books.length-1;
console.log(books);*/

//Consider the same array of objects and find out the book(s) that is/are on the topic of entrepreneurship
function findTopic(topicName){
	for(let i=0; i< books.length; i++){
		//console.log(books[i].name);
		for(j=0; j<books.length; j++){
			if((books[i].topics)[j]==topicName ){
				console.log(books[i].name)
			}
			else{
				console.log('not found');
			}	
		}
	}
}
findTopic('entrepreneurship');
