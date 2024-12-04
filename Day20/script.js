// const interval = setInterval(()=>{
// const date = new Date() ;
// console.log(date)
//   const hours = date.getHours() ;
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds() ;
//   console.log(`${hours}:${minutes}:${seconds}`)
//   const div = document.createElement('div') ;
//   div.innerHTML = `<p>${hours}:${minutes}:${seconds}</p>`
//   document.body.appendChild(div)
// },1000) ;

// setTimeout(()=>{
// clearInterval(interval)
// },10000) ;

//NOTe scopes
//Global , function , block
const college = 'poornima';
let firstName = 'ritesh';
var gadget = 'smartwatch';

//we cannot access variable outside of any function declared inside the body of function its create local scope
// function demo(){
//    let course = 'mern';
//    var a = 5 ;
//    const b = 6;
// }

// demo()

// //block scope
// if(true){
//     // let course = 'mern';
// //    var a = 5 ;
//    const b = 6;
// }
// console.log()

//NOTE Global defined varaible can be accessible in any function scope or any block scope..

//NOTE we cannot access variables outside of the function body weather it is defiend with var ,let , const.

//NOTE var leaks in the block scope we can access the the variable  defined with var keyword outside the block scope..

//NOTE THIS KEYWORD  => point karna

console.log(this);

// this === window

//NOTE this will point to window object in global scope .

function sum() {
  console.log(this);
}

sum();

//NOTE IMP OBJECT
const myDetails = {
  firstName: 'ritesh',
  printName: function () {
    console.log(this.firstName);
  },
};

myDetails.printName('ritesh', 12334);

//create a obj train => take a property named :
// trainName : 'xyz' ;

// book : (passengerName,trainNO) =>
// ritesh has booked a ticket on jaipur-mumbai(123344);

const train = {
  trainName: 'Jaipur-Mumbai',
  book: function (passengerName, trainNo) {
    console.log(
      `${passengerName} has booked a ticket on ${this.trainName} (${trainNo}) `
    );
  },
};

const train2 = {
  trainName: 'Jaipur-chennai',
};

const newBook = train.book;
newBook.call(train2, 'ritesh', 31423);

train.book('ritesh', 12343);

const h1 = document.getElementById('heading');

h1.addEventListener('click', function () {
  this.style.color = 'red';
});

//binding
function printName(a) {
  console.log(this.firstName, a);
}

printName();

const Person = {
  firstName: 'ritesh',
};

//call function method we can use to chnage the behaviour of the this keyword in my program

//Call method
// printName.call(Person,5);

// call , apply and bind
// printName.apply(Person,[5])

//bind
console.log(printName.bind(Person, 5));
const bindFn = printName.bind(Person, 5);
bindFn();

function printAddress(state) {
  console.log(
    `my name is ${this.firstName} i am from ${this.city} which is located in ${state}`
  );
}

//NOTE apply
//NOTE call
//NOTE bind

//NOTE closures

function printVariable() {
  let count = 0;

  return function () {
    console.log(count++);
  };
}

const newFn = printVariable();

// newFn() ;

//NOTE HOISTING : 


