//datatypes
//type conversion and coersion
//if else 
//truthy and falsy
//loops
//functions
//array or object 
//array method
//object method
//string methods
//destructuring 
//spread operator


//NOTE MATH OBJECT 

//NOTE Math.abs
console.log(Math.abs(-7)) ;

//NOTE Math.round 
console.log(Math.round(2.4))

//NOTE Math.trunc
console.log(Math.trunc(3.26))

//NOTE Math.floor (round off the value to downword)
console.log(Math.floor(-4.6)) ;

//NOTE Math.ceil (rounds off to the upper value)
console.log(Math.ceil(4.4)) ;

//NOTE difference between floor and trunc when you use negative value
console.log(Math.trunc(-7.8)) //7
console.log(Math.floor(-7.8))


//NOTe Math.min 
console.log(Math.min(1,2,3,4))

//NOTE Math.max
console.log(Math.max(1,2,3,4)) ;

const arr = [1,2,3,4,5] ;

console.log(...arr)
console.log(Math.max(...arr)) ;

//NOTE Math.random

console.log(Math.floor(Math.random() * 6 ) + 1)


// random range value => .1 to .9

//NOTE Math.pow
console.log(Math.pow(2,3)) ;

//NOTE - MATH.PI
console.log(Math.PI) ;


//TODO task 

//NOTE create a function which generate random values between 1 to 6 called randomNumber() ;

//NOTE then create another function playDice() call the randomNumber() in the function two times takes both the output into two separate variables then calculate the sum if sum is 7 or sum is 12 , the player's win the game otherwise console.log(try again)



//HINT console.log(Math.floor(Math.random() * 6 ) + 1)
//create another function 
// result1 = random();
// resul2 = random() ;
// sum  = resul1 + resul2
// if(sum===7 || sum===8) {
//     conosle.log('you win')
// }else{
//     conosle.log('try again')
// }


function randomNumber(number){
    return Math.floor(Math.random() * number) + 1
}

console.log(randomNumber(6)) ;

function playDice(){
    const result1 = randomNumber(6) ;
    const result2 = randomNumber(6) ;

    const sum = result1 + result2 ;
    sum === 7 || sum === 12 ? console.log('You win') : console.log('try again')
}

playDice() ;


