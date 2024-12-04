//Inheritance

class Car {
  constructor(color, engine) {
    this.color = color;
    this.engine = engine;
  }
}

class X6 extends Car {
  constructor(companyName, color, engine) {
    super(color, engine);
    this.companyName = companyName;
  }
}

const BmwX6 = new X6('bmw', 'blue', 'v12');

console.log(BmwX6);

//short circuiting ;

// console.log(7 && 5);

//falsy values will short circuit

// let error = false

// error && console.log(error)

//or


//React => 
// library => 
//single page applicatio

<h1>fkjdsf</h1>



//NOTe  promises ,
// aysnc await 
// destructuring ,
// spread operator ,
// rest paramter ,
// ternary operator ,
// map , filter ,
// short circuiting ,
// fetch