import 'whatwg-fetch';

const numbers = [
  1, 2, 4, 20,
  50, 75, 80,
];

let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   const current = numbers[i];
//   sum += current; // sum = sum + number
// }
function runThisLotsOfTimes(current) {
  sum += current;
}

// runThisLotsOfTimes is just a function
// runThisLotsOfTimes(2);

numbers.forEach(runThisLotsOfTimes);

console.log(numbers, sum);

// What About Code That Runs Later???
function whenDoesThisRun(str) {
  console.log(`This was run ${str}`);
}

console.log('This was run 1');

whenDoesThisRun(2);

// This is scheduled to happen AFTER the call stack finishes
window.setTimeout(() => {
  whenDoesThisRun(3);
}, 0);

whenDoesThisRun(4);


// Let's Talk About Events
const searchBtn = document.querySelector('.planet-submit');
const searchInput = document.querySelector('.planet-name');

// Oldschool, this will only register one onclick handler
// searchBtn.onclick = function () {
//   window.alert(`You have typed in ${searchInput.value}`);
// };
//
// searchBtn.onclick = function () {
//   window.alert('This will run instead');
// }

searchBtn.addEventListener('click', function () {
  window.alert(`You have typed in ${searchInput.value}`);
});

searchBtn.addEventListener('click', function () {
  window.alert('This can run too!!!');
});
