console.log('we are learning js') ;

//values and varaibles

//NOTE values are the smallest unit of the data

// values can be be diffrenet types => data types 


//NOTE datatypes 
//Note primitive and non primitive 

//NOTE primitive => 

//NOTE String 

let company = 'grras'  ;

//we to have to check weather it is string , number or any other datatypes 

//NOTE typeof

console.log(typeof company)


//Number 

let phoneNum = 3432433 ;
console.log(typeof phoneNum)

//Boolean
let isJavscriptFun = true ;

//undefined ;

let firstName ;
console.log(firstName)
firstName = 'ritesh'
console.log(typeof firstName)

//null

let college = null ;
console.log(college) ;
console.log(typeof college )

//FIXME - null type always be object
//TODO what is the diffrenece between null and undefined ;



//NOTE bigint
let largerNumber = 123456789012345678901234567890123456789n
console.log(Number.MAX_SAFE_INTEGER)
console.log(largerNumber)

//NOTE symbol

//NOTE isjavscriptfun  => isJavascriptFun => camel case

//NOTE keywords to define the variables in the javascript 
// let , var , const

//NOTE //REASSIGN ✅AND REDECLARATION❌ 
//NOTE 
let animal = 'cat' ;

animal = 'dog' ;

// let animal = 'lion'

//NOTE const 
//NOTE REASSIGN❌  AND REDECLARATION ❌ 

// const mobNum = 98493843943; 
// mobNum = 34334344 ;
// const mobNum = 34343434;
// console.log(mobNum) ;

//NOTE var 
//NOTE REASSIGN ✅ AND REDECLARATION✅ ;

var address = 'jaipur';
address = 'kota' ;
console.log(address) ;

var address = 'udaipur' ;
console.log(address)



//Non primitive array and object ;

//TODO type conversion and coersion ;

//NOTE coersion ;

console.log(true + 1)
 
let str = +'5' ;

console.log(typeof str , str)

//NOTE conversion 
let raining = 'true' ;
console.log(typeof Boolean(raining))
//dynamically typed js 

//static types java c++ ;


//TODO null and undefined , typeof null , typeconversion and coersion , let const var difference on the basis of reassign and redeclaration














