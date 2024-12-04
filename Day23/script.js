async function fetchData() {
  try {
    const res = await fetch('https://jsonplacehoder.typicode.com/todos/1');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

fetchData();

//    try{
// const error = new Error('b is null please assign some value') ;
// throw error ;
//     }catch(err){
// console.log(err)
//     }

//new Error() => constructor functions
//new Date()
//new Promise()
//constructor function always created an object

function Players(name, team) {
  (this.firstname = name), (this.team = team);
}
// new => {} =< this

Players.prototype.sport = function () {
  console.log(`${this.firstname} plays for ${this.team}`);
};

const virat = new Players('Virat', 'India');
console.log(virat);

const rohit = new Players('rohit', 'mi');
console.log(rohit);

// virat => prototype => Players

console.log(virat.__proto__);

console.log(rohit.__proto__);

//oops

class Books {
  constructor(name, author) {
    (this.name = name), (this.author = author);
  }
  sport() {
    console.log(`${this.name}`);
  }
}

const book1 = new Books('fsd', 'dfdsa');
const book2 = new Books('d', 'dfsa');
const book3 = new Books('s', 'ddsa');

//  console.log(book1.sport())
//  console.log(book2.sport())
//  console.log(book3.sport())


//TODO prototype property
//TODO improvement in classes over constructor functions ;



