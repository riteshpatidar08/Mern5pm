
//NOTE some (true or false)
const num = [0,1,6,7,2,3,4,5 ,12] ;

const someOutput = num.some((item)=>{
return item > 3 ;
})
console.log(someOutput) ;

const product = [{name:'tv', InStock : true},{name:'ac', InStock : true}] ;

const someProductOuput = product.some((product)=>{
    return !product.InStock ;
})

console.log(someProductOuput) ;
//NOTE every.

const everyOutput = num.every((item)=>{
    return item > 6
})
console.log('everyoutput',everyOutput)
//NOTE sort.
const sortedArray = num.sort((a,b)=>{
    return b-a ;
}) ;

console.log(sortedArray) ;
console.log(num)
//NOTE reverse.

const reversedArray = num.reverse();
console.log(reversedArray) ;

//NOTE toReserved , toSpliced , tosorted (newly added methods)
//reverse  , splice , sorted  ;

//NOTE Destructuring : react / nodejs express ;

const numberArray = [1,2,3,4,[5,6]] ;

// const a = numberArray[0] ;
// const b = numberArray[1] ;
// const c = numberArray[2];
// const d = numberArray[3];

// console.log(a,b,c,d) ;

//NOTE Skiping values
const [a,,c,d,[e,f]] = numberArray ;

console.log(a,c,d,e,f) ;
//TODO TASK 1
const fruits =[
    'mango' ,
    'grapes',
    ['papaya','cherry'],
    'watermelon'
]

//NOTE default values ;

const newNumberArray = [1,2,3] ;

//FIXME things to remember imp
const [x,y,z=4] = newNumberArray ;

console.log(x,y,z) ;

//NOTE rest paramter (...) ;
//packs the remaining value of the array in a variable.
const companies = ['google','ibm','grras','meta','netflix'] ;

const [firstCompany ,secondCompany ,...rest ] = companies ;
console.log(firstCompany ) ;
console.log(rest) ; 


//Object 
//NOTE destructuring 

const mydetails = {
    firstName  : 'ritesh',
    address : {
        state : 'rajasthan',
        city : 'jaipur'
    },
  
}

// const {firstName,address} = mydetails ;
// console.log(firstName, address)
//changing the variale name..

const {firstName : fName , address:{state,city} , age =24} = mydetails;
console.log(fName ,age,state) ;






























