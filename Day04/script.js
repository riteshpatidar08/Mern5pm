//NOTE ternary operator ;

let hasMember = false;

hasMember
  ? console.log('you are a member')
  : console.log('you are not a memeber');

//String interpolation //string template
const firstName = 'ritesh';
const fullName = `my name is ${firstName}`;

console.log(fullName);

const companies = ['meta', 'netflix', 'google', 'ibm'];

//for of

for (let company of companies) {
  console.log(company);
}

const movies = [
  {
    title: 'inception',
    director: 'Christoper Nolan',
    year : 2012
  },
  {
    title: 'Spiderman',
    director: 'test',
    year : 2012
  },
];

function getDirector(year) {
  for (let movie of movies) {
    console.log(movie);
   
    if (movie.year === year) {
    return movie.title
    }

  }
  return 'not valid movie';
}
 

console.log(getDirector(2012));

//for in 


for(let index in companies){
    console.log(companies[index])
}


// const obj = {
//     firstName : 'ritesh',
//     age : 25 
// }

// for(let keys in obj){
//     console.log(`${keys} : ${obj[keys]}`)
// }


// do while
// let count = 1 
// do{
// console.log(count) ;
// count++

// }while(count <= 5);

let confirmPassword = 'ritesh@123' ;
let password ;


do{
password = prompt('enter the password') ;
if(confirmPassword !== password){
    alert('Invalid password please enter again')

}
}while(confirmPassword !== password);

alert('login successfull') ;


//prompt => 1.hi ,2. bye  , 3.leave 
// => switch case case 1,2,3 console.log(bye) console.log(hi);

