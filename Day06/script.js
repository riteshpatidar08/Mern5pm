//NOTE = indexof

const usernames = ['ritesh', 'utsav', 'aman'];

console.log(usernames.indexOf('ritesh'));

//NOTE at
//NOTE we pass the index of the element it returns the element
console.log(usernames.at(2));

//NOTE concat
//NOTE it gives a new array doesn't mutate original array ;
const username2 = ['shubham', 'lakshit', 'azad', 'divyanshu'];

const concatOutput = usernames.concat(username2);

console.log(usernames);
console.log(concatOutput);

//NOTE join converts the array into string accepts a separator value (for eg ' ' , -  , /)
const joinOutput = usernames.join(' ');
console.log(joinOutput);

//NOTE imp FOREACH
const forEachOutput = usernames.forEach((item) => {
  console.log(item + ' ' + 'hello');
});

console.log(usernames);
console.log(forEachOutput);
//NOTE imp map => transform an array by doing some operation (higher order method) => callbackfunction accepts => ()=>{} ;

const numbers = [1, 2, 3, 4, 5, 6, 7];

//type 1

//type 2
// const mappedOutputt = numbers.map(function(item){
//     return item* 3 ;
// })

const mappedOutput = numbers.map((item) => {
  return item * 2;
});

console.log(numbers);
console.log(mappedOutput);

//TODO use map method:
const names = [
  { firstName: 'ritesh', lastName: 'patidar' },
  { firstName: 'shubham', lastName: 'jain' },
];
(output) => ['riteshpatidar', 'shubhamjain'];

//NOTE filter (higher order method)

const product = [
  { name: 'tv', price: 2000 , quantity : 2},
  { name: 'mobile', price: 10000 , quantity : 3 },
  { name: 'ac', price: 6000 , quantity : 3 },
];

const filteredOutput = product.filter((item)=>{
    console.log(item)
return  item.price > 5000 ;
})

console.log(filteredOutput) ;


//NOTE find

const findOutput = product.find((item)=>{
    console.log(item)
return  item.price > 5000 ;
})

console.log(findOutput) ;


//NOTE reduce

const num = [1,2,3,4,5] ;

const reducedOutput = num.reduce((accumulator,currentItem)=>{
    console.log(accumulator , currentItem)
    return accumulator + currentItem
},0)
console.log(reducedOutput) ;

const cartPrice = product.reduce((accumulator,currentItem)=>{
    console.log(accumulator,currentItem)
return  accumulator + (currentItem.price * currentItem.quantity)
},0) 
console.log(cartPrice)

//NOTE some
//NOTE every.
//NOTE sort.
//NOTE reverse.
