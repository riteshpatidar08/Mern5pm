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
 

//for in 


console.log(getDirector(2012));
