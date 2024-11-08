//conditional statement ;

// truthy falsy values in js
// falsy => '' , 0 , undefined , null , -0 , NaN
//truthy => like string which is not empty or number which is not zero
if (' ') {
  console.log('truthy value');
} else {
  console.log('falsy value');
}

//Non primitves ;

//array or object ;

const friends = ['utsav', 'aman', 'shubham', 0, true];

console.log(friends[0]);

const obj = {
  firstName: 'ritesh',
  age: 34,
  friends: ['utsav', 'aman', 'shubham', 0, true],
  address: {
    state: 'raj',
    city: 'jaipur',
  },
  getDetails: function () {
    console.log('hello');
  },
};

//NOTE accessing values from obj

//NOTE bracket notation and second is dot notation ;
const property = 'address';
console.log(obj[property]['city']);

//Note updating the values in the object ;
obj.age = 23;
console.log(obj.age);

//global object prompt console are the part of this object
console.log(window);

//NOTE function we created in the object is called method :

//NOTE  : functions in js ;

//types functions
//NOTE Function declaration ;

//NOTE   //hoisting
console.log(window);
console.log(window.sum(2, 3));

function sum(a, b) {
  return a + b;
}

const totalSum = sum(2, 3);
console.log(totalSum);

// parameter => variables where the arguments are saved
//argument => real values we pass in the functions

//function expression
//arrow functions

// expression => 5+5 => 10 => value => variable

// interaction => alert , prompt , confirm ;

// const home = confirm("is your home is in jaipur")

//TODO TOPICS COVER TODAY
//GIT , Git hub
//truthy and falsy values '
//non primitve array or object
//window object ..=> global object which is the part of the browser
//interaction prompt , confirm , alert
//functions => function declaration => hoisting

