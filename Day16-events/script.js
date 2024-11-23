{
  /* <table>
    <tr>
        <th>name</th>
        <th>departmant</th>
        <th>rollno</th>
    </tr>
    <tr>
        <td>abc</td>
        <td>cs</td>
        <td>432343</td>
    </tr>
    <tr>
        <td>abc</td>
        <td>cs</td>
        <td>432343</td>
    </tr>
</table> */
}

const table = document.createElement('table');
const headerRow = document.createElement('tr');
const header = ['name', 'department', 'rollno'];

const data = [{ name: 'ritesh', department: 'Cs', rollno: '15egcs734' }];

header.forEach((el) => {
  const th = document.createElement('th');
  th.innerText = el;
  headerRow.appendChild(th);
});
table.appendChild(headerRow);
data.forEach((item) => {
  console.log(item);
  const dataRow = document.createElement('tr');
  header.forEach((key) => {
    console.log(key);
    const td = document.createElement('td');
    td.innerText = item[key];
    dataRow.appendChild(td);
  });
  table.appendChild(dataRow);
});

document.body.appendChild(table);

// mydetails['name'];

//events

const btn = document.getElementById('btn');

console.dir(btn);

// btn.onclick = function(){
//     console.log('hello')
// }

// const button = {
//     onclick : function(){
//         alert('hi')
//     }
// }

// button.onclick = function(){
//     console.log('hello button')
// }

// button.onclick()

//addEventListener

const output = document.getElementById('output');

//MOUSE EVENTS
btn.addEventListener('click', function () {
  output.textContent = 'Click happens';
});

btn.addEventListener('dblclick', function () {
  output.textContent = 'db click happens';
});
btn.addEventListener('mouseenter', function () {
  output.textContent = 'mouse enter happens';
});
btn.addEventListener('mouseout', function () {
  output.textContent = 'mouse out happens';
});

//input events
const input = document.getElementById('input');

input.addEventListener('focus', function () {
  output.textContent = 'input focused';
  input.style.borderColor = 'blue';
});

input.addEventListener('blur', function () {
  output.textContent = 'input focused';
  input.style.borderColor = 'red';
});


input.addEventListener('input', (event) => {
  console.log(event.target.value);
  output.textContent = 'input changed';
});
