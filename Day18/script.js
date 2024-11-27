//important => Promises  ;

// how to create a promise ;

//promise => object => {} => methods

//promise state => pending , fulfilled , rejected

const willYouPassInExam = new Promise((resolve, reject) => {});

console.log(willYouPassInExam);

//create a function which return promise ;

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       resolve('promise have fulfilled');
//     } else {
//       reject('promise failed');
//     }
//   });
// }

// console.log(fetchData());

// fetchData()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

function fetchCountry(url) {
  const countryName = ['india', 'srilanka', 'usa'];
  return new Promise((res, rej) => {
    if (url === 'www.myapi.com') {
      res(countryName);
    } else {
      rej('failed');
    }
  });
}


fetchCountry('www.myapi.com')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));



