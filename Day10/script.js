//STRING METHODS (15/11/24) 

let str = 'my name is is abc' ;

//NOTE length empty space also count in the length
console.log(str.length) ;

//NOTE to access specific letter using index value
console.log(str[2])


//NOTE toUpperCase and toLowerCase
console.log(str.toUpperCase()) ;

//NOTE toLowerCase
console.log(str.toLowerCase())

//NOTE charAt
console.log(str.charAt(1))

//NOTE indexOf
console.log(str.indexOf('m',1))

//NOTE includes
console.log(str.includes('my'))

//NOTE slice
console.log(str.slice(4,1)) ;

//NOTE substring
console.log(str.substring(4,1)) ;
//NOTE replace
console.log(str.replace('is','are'))

//NOTE replaceAll
console.log(str.replaceAll('is','are'))

//NOTE split
const newStr = 'we are learning js' ;
const splitOutput = newStr.split(' ') ;
console.log(splitOutput.reverse().join(' '))

//NOTE trim
const trimString = '    my name     ' ;
console.log(trimString.trim()) ;

//NOTE repeat 
const j = 'javascript'
console.log(j.repeat(3))

//NOTE padStart
const padstring = 'hello' ;

// '*****hello'
const paddedOutputEnd = padstring.padEnd(10,'.')
console.log(paddedOutputEnd);
const paddedOutputStart = padstring.padStart(10,'*')
console.log(paddedOutputStart) ;


//NOTE const cardNumber = '4567897868545435' ;
//NOTE const slicedNumber = cardNumber.slice(-4) ;
//NOTE console.log(slicedNumber) ;

//TODO create a function to mask card number(*************4323) ;

const cardMask = (cardNumber) => {
    if(cardNumber.length !== 16){
        return 'not a valid card'
    }

 const slicedNumber = cardNumber.slice(-4) ;
 const maskedCard = slicedNumber.padStart(16,'*');
 return maskedCard ;
}

const result = cardMask('345678876543234')
console.log(result) ;

// console.log(maskedCard)

//NOTE startsWith
const strtString = 'we are in the class' ;
console.log(strtString.startsWith('we')) ;

//NOTE endsWith
const url = 'https://www.google.com' ;
console.log(url.endsWith('.com')) ;

//NOTE search
console.log(url.search('j'))
//NOTE match
const para =  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deserunt delectus cumque dignissimos blanditiis unde aliquid, illo consequatur libero minima ad aliquam culpa, tenetur fuga impedit! Deserunt minus tempora optio."
console.log(para.match('minima')) ;


//TODO create function which accepts a email and check if email contains @ and ends with .com return "valid email" otherwise return "invalid email please try again".


const checkEmail = (email) => {
    return email.includes('@') && email.endsWith('.com')}


//NOTE variation 2
// const checkEmail = email => email.includes('@') && email.endsWith('.com')


console.log(checkEmail("ritesh@gmail.com")) ;


//NOTE .png , .jpeg 












