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

function makePlanet(planet) {
  // Create a div
  const planetEl = document.createElement('div');
  // Add the class "result-item" to that div
  planetEl.classList.add('result-item');

  // Fill in the child elements for the "result-item"
  planetEl.innerHTML = `
    <h2 class="result-item__name"></h2>
    <p class="result-item__population"></p>
    <p class="result-item__gravity"></p>`;

  // Set the innerText of the child elements based on the "planet" data
  planetEl.querySelector('.result-item__name').innerText = planet.name;
  planetEl.querySelector('.result-item__population').innerText = `${planet.population} Lifeforms`;
  planetEl.querySelector('.result-item__gravity').innerText = `Gravity: ${planet.gravity}`;

  return planetEl;
}

function fillResults(results) {
  const resultListEl = document.querySelector('.results');
  resultListEl.innerHTML = '';

  results.forEach((planet) => {
    const planetEl = makePlanet(planet);

    resultListEl.appendChild(planetEl);
  });
}

function searchForPlanet(name) {
  // Look up a list of planets that match the search name
  fetch(`http://swapi.co/api/planets?search=${name}`)
    .then((res) => {
      return res.json();
    }).then((data) => {
      // Fill in a list of search results
      fillResults(data.results);
    });
}

searchForPlanet('Yavin');

// Listen for the searchBtn to be clicked
searchBtn.addEventListener('click', () => {
  // Run "searchForPlanet" with the input value
  searchForPlanet(searchInput.value);
});
