const animals = [
    'dog' , 'cat' , 'dog' , 'cat' , 'bird'
]

// output => {dog:3 , cat : 2 , brid : 1}
const results = {}
for(let i = 0 ; i < animals.length ; i++){
 let item = animals[i] ;
 if(results[item]){
    results[item]++
 }else{
    results[item] = 1 ;
 }

}

console.log(results)


//if item exist in the object increase the count  {dog:1} => {dog:2}
//if not exist show the count 1  {dog:1}



// const results = {'dog': 1}
// for(let i = 0 ; i < animals.length ; i++){
//  let item = animals[2] => dog ;
//  if(results['dog']){
//     results[item]++ => 1++ => 2
//  }else{
//     results['dog'] = 1 ;
//  }

// }