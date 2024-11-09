//Arrays methods : 

//NOTE push 
//NOTE what methods returns
//NOTE check if it is mutatating (changing the original array ;

//NOTE PUSH ;

const companies = ['meta','google','netflix'] ;

//1st 
//returns the length of new array
const pushOutput = companies.push('tcs') ;

// console.log(pushOutput) ;

//check if original array changed ;
// console.log(companies)  ;

//NOTE - 
const numbersArray = [1,2,3,4] ;

const newArr = [] ;

for(let item of numbersArray){
    newArr.push(item)
}

// console.log(newArr)

for(let i=0 ; i < numbersArray.length ; i++){
    newArr.push(numbersArray[i]) ;
} ;

//NOTE POP ;
const popOutput = companies.pop();

//NOTE returns the element which is deleted from the array ;
// console.log(popOutput) ;
// console.log(companies) ;

//NOTE unshift  ;

const unshiftOutput = companies.unshift('grras') ;

//return new array length
// console.log(unshiftOutput);
// do not mutate the original array 
// console.log(companies) ;

//NOTE shift ;

const shiftOutput = companies.shift() ;

// console.log(shiftOutput) ;
// console.log(companies) ;

//NOTE includes (return true or false) ;

const includesItem = companies.includes('tcs') ;
// console.log(includesItem) ;

//NOTE ; 

//NOTE you have to create a new array 
// then you have to add a new item to that array
//NOTE if the item is already exist in the array console.log('item already exist) if item is not in the array push the item in the array ;

const products = ['tv','phone','ac'] ;

const newProduct = 'ac';

if(!products.includes(newProduct)){
    products.push(newProduct);
}else{
    console.log('item already exists')
}

// console.log(products) ;


//NOTE Slice  to extract the part of an array 

const newProductsArr = ['tv','ac','fridge','mobile','heater','washingmachine'] ; 

const slicedOutput = newProductsArr.slice(1,2) ;

//return new array 
// console.log(slicedOutput) ;

// console.log(newProductsArr) ;

//NOTE SPlice(add element to any particular index ,remove element) ;(

const splicedOutput  = newProductsArr.splice(0,0,'tshirt','shirt') ;

console.log(splicedOutput);

//Note splice method changed the original array 
console.log(newProductsArr) ; 

//NOTE FindIndex() ;

const numbersArr = [1,2,3,4,5] ; 

// function itemCheck(item){
//     return item < 5
// }

// callback function = ()=> {}

//NOTE in array the methods which accepts a function is called higher order method , the function we pass in higher order method is called callback function.

const findOutput = numbersArr.findIndex((item)=>{
   return item > 5 ;
})

console.log(findOutput);   



const newwProduct = ['tv','ac','fridge','mobile','heater','washingmachine'] ; 

const indexOutput = newwProduct.findIndex((item)=>{
return item === 'ac'
})

console.log(indexOutput)


// for(let i = 0 ; i < newwProduct.length ; i++){
//     if(newwProduct[i]==='ac'){
//         console.log(i)
//     }
// }









































