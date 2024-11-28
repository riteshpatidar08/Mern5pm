//fetch()
const select = document.getElementById('select');
fetch('https://restcountries.com/v3.1/all')
  .then((res) => res.json())

  .then((data) => {
    //data is an array so i will loop it
    data.forEach((country) => {
      const option = document.createElement('option');
      option.textContent = country.name.common;
      select.append(option);
    });
  });

select.addEventListener('change', function (event) {
  fetch(`https://restcountries.com/v3.1/name/${event.target.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

//Async await =>

//NOTE 1 : create a function

// async function greet(){
//     console.log('hello we are learning async await')
// }

async function fetchData() {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const data = await res.json();
  console.log(data);
}

fetchData();

async function fetchStarWars() {
  const res = await fetch('https://swapi.dev/api/people/1');
  const data = await res.json();
  console.log(data);
}

fetchStarWars();


//Clock 

