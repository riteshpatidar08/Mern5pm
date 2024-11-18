'use strict'

//Date object => inbuilt object

// console.log(Math.floor(-4.2)) -5
// console.log(Math.trunc(-4.2)) -4

//upwards
console.log(Math.ceil(4.6));

let arr = [1, 2, 3, 4, 5];
// 1,2,3,4,5 =>
console.log(...arr);
// 1,2,3,4,5
console.log(Math.min(...arr));
const arrr = [1, 2, 3, 4];
// Math.min(...arrr)
console.log(Math.max(1, 2, 3, 4));

console.log(Math.floor(Math.random() * 6));

//Date object

const date = new Date();

console.log(date);

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getMinutes());

const currentTime = Date.now();
console.log(currentTime);

const time = new Date(currentTime);
console.log(time);

// const newTime = new Date(year,month,date,hours,sec,millisecond)

const newTime = new Date(2024, 8, 8, 13, 45, 56);

console.log(newTime);

//todo
// console.log(newTime.getMonth() + 1) ;

// const newDate = new Date(
//     '8-Aug-2024'
// )
// console.log(new Date())
// console.log(newDate) ;

function checkBirthDay(birthdate) {
  const birthTime = new Date(birthdate);
  console.log(birthTime);

  const day = birthTime.getDate();

  const month = birthTime.getMonth() + 1;

  console.log(day, month);

  const time = new Date();

  console.log(time);

  const currentDate = time.getDate();
  const currentMonth = time.getMonth() + 1;
  console.log(currentDate, currentMonth);

  if (currentDate === day && currentMonth === month) {
    console.log('its your birthday');
  } else {
    console.log('not your birthday');
  }
}

checkBirthDay('18-Nov-2024');

// sunday => 0
// monday => 1
// tuesday => 2


//NOTE UPDATED things in object 
const features = ['heart-rate-monitor','sleep-tracker']
const gadget = {
    type : 'smartWatch',
    company : 'samsung',
    // features : features, if key name is same and value name is same then you can use below approach
    features ,
    batteryLife : '45hr',
    fullDetails(){
        console.log('smartWatch')
    }
}
//  fullDetails(){
//         console.log('smartWatch')
//     }

console.log(gadget.fullDetails())
//2015 es6

// const week = ['mon','tues'] ;

// const days = {
//    [week[0]] : 'true'
// }

// console.log(days)

firstName = 'ritesh' ;
console.log(firstName)

function sum(a,a){
    return a+a
} ;

console.log(sum(3,4)) ; 