// //NOTE last task
// // const input = document.getElementById('color');

// // const container = document.getElementById('color-container')

// // console.log(input,container)

// // input.addEventListener('input',function(e){
// //     console.log(e.target.value)
// //     container.style.backgroundColor = e.target.value
// // })

// //TODO LIST

// const inputEl = document.getElementById('input_task');
// const btn = document.getElementById('btn');
// const container = document.getElementById('task_container');

// function addTodoTask() {
//   const textValue = inputEl.value;
//   console.log(textValue);

//   const taskDiv = document.createElement('div');
//   const textBox = document.createElement('span');
//   textBox.textContent = textValue;
//   const btndelete = document.createElement('button');
//   btndelete.textContent = 'delete';

//   btndelete.addEventListener('click', function () {
//     taskDiv.remove();
//   });

//   taskDiv.append(textBox);
//   taskDiv.append(btndelete);

//   container.append(taskDiv);
// }

// btn.addEventListener('click', addTodoTask);

// const para = document.getElementById('paragraph');
// console.log(para);

// // para[0].classList.remove('para')

// para.classList.add('para');
// console.log(para.classList.contains('para'));
// // para.classList.remove('para') ;

// const toggleBtn = document.getElementById('toggle');

// toggleBtn.addEventListener('click', function () {
//   document.body.classList.toggle('dark');
//   para.classList.toggle('dark');
// });

// para.setAttribute('title', 'details');

// console.log(para.getAttribute('title'));

// //NOTE event capturing
// //NOTE event bubbling
// //NOTE event delagation
// //NOTE event propagation


// //select => all => nodelist => loop
// //html collection => className , tagName => not loop

// //update 
// //text => innerText , innerHTml , textContent

// //input value => 
// // input.value 


// //NOTe adding a new class

// //NOTE  setAttribute 
// //para.className = 'dark'
// //NOTE classList.add('para')


// //element 

// //NOTE first document.createElemeent()
// //text
// //NOTE append
// //NOTE document => index.html => dom tree => root element



//NOTE asynchronous js 

// js => synchronous 
// asynchronous =>

// console.log('hello')
// alert('hi') 
// console.log('bye') ;


//asynchronous => browser

//setTimeout , 

// console.log('hello')
// // console.log(window)

// setTimeout(function(){
//     alert('hi')
// },500) ;

// console.log('bye')  ;


//callback : 


function greet(callback){
callback()
}

function msg(){
console.log('welcome to the grras')
}


// msg = callback
// greet = higher order function
greet(msg);











