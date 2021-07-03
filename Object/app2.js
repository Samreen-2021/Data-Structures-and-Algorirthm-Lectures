//You are given a object of user’s details as:

 let userObject = {
	userName: 'Philip',
	fatherName: 'Norman',
	className: 'four',
};


/*Your task is to traverse the object and print its properties (both names and values).*/
for (let key in userObject) {
    console.log(key + " " +userObject[key]);
}

//  using the same object, change the userName to your name, fatherName to your father’s name, and className to your class. 
userObject.userName = 'samreen';
userObject.fatherName = 'Shafaq Bukhari';
userObject.className = 'six';
for (let key in userObject) {
    console.log(key + " " +userObject[key]);
}