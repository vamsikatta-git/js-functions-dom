const clock = document.getElementById("clock");
const date = new Date("2023","12","23","5","23","34");
// const date = new Date();
//clock.innerHTML = date.toDateString(); // output : Fri Dec 20 2024
// clock.innerHTML = date.toUTCString(); // Convert a date to a string using the UTC standard: Thu, 19 Dec 2024 21:55:24 GMT
// clock.innerHTML = date.constructor;
// clock.innerHTML = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
// clock.innerHTML = date.getMonth();
// function gettingDate()
// {
//   const inp = document.getElementById("input")
//   const value = inp.value;
//   // console.log(value);
//   clock.innerHTML = value;
// }

let nameis = "vamsikattavamsi";
console.log(nameis.padEnd(nameis.length + 10,"@gmail.com"));

let day = date.getDay();
switch (day) {
  case 0: day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
const todayDate = date.getDate();
const year = date.getFullYear();
const month = date.getMonth();
// clock.innerHTML = `${todayDate}-${month}-${year}(${day})`;


function time()
{
  const clock = document.getElementById("clock");
  const date = new Date();
  const h = String(date.getHours()).padStart(2,'0');
  const m = String(date.getMinutes()).padStart(2,'0');
  const s = String(date.getSeconds()).padStart(2,'0');

  clock.innerHTML = `${h} : ${m} : ${s}`
}
setInterval(time,1000);
// console.log(String(4));

clock.addEventListener('mouseover',color);

function color(){
  clock.style.backgroundColor = 'red';
}