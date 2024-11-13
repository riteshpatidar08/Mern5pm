

//OBJECT METHODS :


const details = {
    firstName : 'ritesh',
    age : 2024-1997 ,
    address : 'jaipur'
}

//Object.keys() 
const keys  = Object.keys(details) ;

// keys => array

keys.forEach((key)=>{
console.log(key)
})

//NOTE METHOD Chaining 

Object.keys(details).forEach((keys)=>{
    console.log(keys)
})  ;


//NOTE Object.values() ;
const values = Object.values(details);
console.log(values) ;
values.forEach((value)=>{
    console.log(value)
})

//NOTE Object.entries() ;


const entries = Object.entries(details) ;
console.log(entries) ;

// entries.forEach((entry)=>{
//     console.log(entry)
//     // console.log(entry[0] + ':' + entry[1])
// })

entries.forEach((entry)=>{
    //using destruturing
   const [key , value] = entry
   console.log(`${key}: ${value}`)
})
 

//Object.freeze()

Object.freeze(details) ;

details.firstName = 'abc' ;

console.log(details)


//NOTE Spread Operator (...) ;

const arr = [1,2,3,4,5,6] ;

// 1,2,3,4,5,6
//NOTE 1st : application copy of an array ;


//FIXME donot follow to create a copy of array or object
// let newArry = arr ;

// console.log(newArry.push(7)) ;
// console.log(arr)
// console.log(...arr)

const newArr = [...arr] ;
console.log(newArr.push(7)) ;
console.log(newArr)
console.log(arr)

//merging arrays - 

const fruits = ['mango','grapes','papaya'] ;
const vegetables = ['tomato','potata'] ;

const groceryBag = [...fruits,...vegetables] ;

console.log(groceryBag)

//adding elements

const fruitss = ['watermelon',...fruits ,'pomengranate'] ;
console.log(fruitss) ;


//object merging using spread operator
const obj1 = {
    firstName  : 'ritesh'
}

const ob2 ={
    lastName : 'patidar'
}

//updating the value of existing key 
const obj3  = {...obj1 , firstName:'abc'} ; 






