

//NOTE DOM MANIPULATION 

//NOTE DOM => document object model 


//document => html file

//object => jitne bhi appke elements honge wo as an object represent : 

//NOTE select 

//first document  => 

// const arr = [1,2,3,4] ;

// arr.forEach((el)=>{
// document.write(el)
// })

//NOTe select the element 
// console.log(document)
// console.dir(document)
// const h1 = document.getElementById('heading') ;

// console.log(h1) ;
// console.dir(h1) ;

// h1.innerText = 'updated using dom' ;


// console.log(document.body) 


//NOTE Select the elements

//1 .getElementsByTagName 

const h1 = document.getElementsByTagName('h1')
console.log(h1) ; 

console.log(h1[1]) ;

// h1.forEach((e)=>{
//     console.log(e)
// })

//NOTE  we cannot loop html-collection directly using forEach

//2. getElementsByClassName :

const newEl = document.getElementsByClassName('para');
console.log(newEl) ;  

//3 .getElementById :

const newHeading = document.getElementById('heading');
console.log(newHeading) ;

//4 querySelector : 

const span = document.querySelector('.text')
console.log(span)

//5 querySelectorAll  :

const allEl = document.querySelectorAll('.text')
console.log('queryselectorAll' ,allEl) ;


allEl.forEach((el)=>{
console.log(el)
})

//Nodelist ko main directly using forEach loop krskta 

// HTMLCOLLECTION                     |      NodeList
//1. cannot loop using forEach             1. we can loop nodelist using forEach








