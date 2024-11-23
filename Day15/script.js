// //Select
// //update => text

// const heading = document.getElementById('heading') ;
// const link = document.getElementById('link')
// const img = document.getElementById('img')
// console.log(heading)
// console.dir(heading)
// console.dir(link)
// console.dir(img)

// //NOTE textContent
// console.log(heading.textContent)

// //NOTE innerText
// console.log(heading.innerText) ;

// //NOTE innerHTML
// console.log(heading.innerHTML)
// heading.innerHTML = `<p>hello</p>`

// //a href

// link.href = 'https://www.amazon.com'
// link.textContent  = 'Amazon'

// //img src
// img.src = 'https://picsum.photos/200' ;

// //Create element =>
// const para = document.createElement('p') ;

// para.textContent = 'hello'

// const container = document.getElementById('container') ;

// container.appendChild(para) ;

// //styling

// para.style.color = 'red'
// para.className = 'paragraph' ;

//NOTE card => div
//NOTE img => img
//NOTE heading => h2
//NOTE para => p
//NOTE button => button

// const card = document.createElement('div');
// const imgg = document.createElement('img');
// const h2 = document.createElement('h2');
// const paragraph = document.createElement('p');
// const button = document.createElement('button');
// const container = document.getElementById('card_container');

// console.log(card, imgg, h2, paragraph, button);

// imgg.src = 'https://placehold.co/200';
// h2.textContent = 'Card Title';
// paragraph.textContent =
//   'we are created a card using js we are created a card using j we are created a card using j';
// button.textContent = 'Click';

// //NOTE using appendChild we can only add one child at a time
// // card.appendChild(imgg)
// // card.appendChild(h2)
// // card.appendChild(paragraph)
// // card.appendChild(button)

// //NOTE using append we can add multiple elements at once
// card.append(imgg, h2, paragraph, button);
// container.appendChild(card);

// card.className = 'card';

//<input type='text' placeholder='enter something>

const inputEl = document.createElement('input');

//NOTE setAttribute //getAttribute
inputEl.setAttribute('type', 'text');

inputEl.setAttribute('placeholder', 'Enter something...');

console.log(inputEl.getAttribute('placeholder'));

document.body.appendChild(inputEl);

//NOTE append , appendChild , prepend , insertBefore ,insertAdjacentHTML , insertAdjacentElement  ;

//prepend :

const list = document.getElementById('list');

const li = document.createElement('li');

li.textContent = 'random item'; 


//NOTE append
// list.append(li)

//NOTE prepend
// list.prepend(li)

//NOTE insertAdjacentElement

list.insertAdjacentElement('afterend', li);


