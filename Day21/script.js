//HOISTING :
'use strict';
//before execution the file is read for variable declaration and functions and a new property is created on window object
console.log(firstName);

var firstName = 'divyanshu';

//NOTE var keyword is hoisted initial value will be undefined ;

//NOTE let and const (Temopral dead zone)
// console.log(a)

// let a = 5 ;

// console.log(a) ;

//NOTE let and const => let and const also are hoisted but they are in the temporal dead zone.

greet();

function greet() {
  console.log('hello');
}

console.log(window);

// greet2() ;

let greet2 = function () {
  console.log('hello');
};

// greet3 => undefined => undefined() => undefined is not a function

var greet3 = function () {
  console.log('hello 3');
};

//NOTE var keyword creating a property on the window object
//NOTE function declaration also created a property on the window object initial value will be the function itself..

// console.log(console.log()) ;

//strict mode => 'use strict'

let college = 'poornima';
console.log(college);

function dummy() {
  console.log(this);
}

dummy();

//this behaviour in arrow function
console.log(this);

const arr = () => {
  console.log(this);
};

//NOTE arrow function doestnot have its own this keyword it always uses the parent or lexical scope (this) ;

const obj = {
  firstName: 'ritesh',
  printName: function () {
    console.log(this.firstName);
  },
};

obj.printName();
