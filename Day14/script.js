//h1 element ko select

const heading = document.getElementById('heading');
const link = document.getElementById('link');
const input = document.getElementById('username');
const container = document.getElementById('container');
console.log(heading);
console.log(link);
console.log(input);

//NOTE textContent
console.log(heading.textContent);

// heading.textContent = 'hello'
//NOTE innerText
console.log(heading.innerText);
heading.innerText = `<p>hello all elements are removed</p>`;
console.log(heading.innerText);
//NOTE innerHTML
console.log(heading.innerHTML);

heading.innerHTML = `<p>hello all elements are removed</p>`;

console.log(heading.innerHTML);

//!SECTION
link.textContent = 'Amazon';
link.href = 'https://www.amazon.com';

console.log(input.value);

//NOTE 3 part create element :

//STEP 1 - create an element

const h2 = document.createElement('h2');
console.log(h2);

// step text
h2.innerText = 'created by using js';

// step 3 attach the element where you want to show it
container.appendChild(h2);

//2nd way

// container.innerHTML = `<h2>created by using js</h2>`

//array = ['google','meta','netflix','ibm','tcs] ;
//create a div for each element ;
//document.body.appendChild() ;

const companies = ['google', 'meta', 'netflix', 'ibm', 'tcs'];
const color = ['red','blue','orange','black','green'] ;

companies.forEach((el,index) => {
  console.log(el,index);
  const div = document.createElement('div');
  div.innerText = el;
  div.style.color = color[index]
  console.log(div);
  document.body.appendChild(div);
  
}); 


//css styles 







