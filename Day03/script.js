//Function declaration =>

//function expression

//NOTE in js function treated as value ;

// value => variable
// console.log(sum(3,4))

const sum = function (a, b) {
  return a + b;
};

console.log(sum);

//arrow =>
//single line arrow function
//multiline line arrow function

//NOTE single line
const substraction = (a, b) => a;

console.log(substraction(2));

//note multiples lines
const multiply = (a, b) => {
  const result = a *5
  return result;
};

//switch case ;

// let drink = prompt('enter the drink tea , coffee , cola ,pepsi');

// switch (drink) {
//   case 'tea':
//     console.log('drinking tea');
//     break;
//   case 'coffee':
//     console.log('drinking coffee');
//     break;
//   case 'cola':
//     console.log('drinking cola');
//     break;
//   case 'pepsi':
//     console.log('drinking pepsi');
//   default:
//     console.log('please enter a valid drink');
// }

// switch(role){
//     case 'admin':
//         console.log(age>18 ? hasMember ? 'hello': 'bye' : "deny access")
// }

//arrays :

// string , number , boolean , object //array of object
const products = [
  {
    productName: 'tv',
    price: 'Rs20000',
    category: 'electronics',
    screenSize: '32inch',
  },
  {
    productName: 'Phone',
    category: 'mobile',
    price: 'Rs20000',
    screenSize: '10inch',
  },
];

//accessing values from  array of object


//loops in javascript for , while , do while , for in  , for of

let fruits = ['apple','mango','grapes','orange','date'] ;
console.log(fruits.length)

//for loop ;

for(let i=0 ; i < fruits.length ; i++ ){
    if(i%2 !== 0){
      fruits[i] = fruits[i].toUpperCase()
    }
   console.log(fruits[i])
}


//while loop 
let i = 0
while(i<fruits.length){
    console.log(fruits[i])
    i++
} ;
 
// for of 
for(let fruit of fruits){
   
}


