let user = {

    name: 'samreen',

    email: 'abcd@example.com',

    age: 65,

};
for (let key in user) {
    if(key=='age'){  
        console.log('true')
    }
    else{
        console.log('false')
    }

//    console.log(key);
    // console.log(user[key]);
}
/*user.location ='uae';
user.education = "Ms";
console.log(user);
console.log(user.name);
delete user.age;
console.log(user);
user.location= 'islamabad';*/

