function beenHere(func, array) {
  console.log('I\'ve been to the following places: ');
  array.forEach(function(element) {func(element);});
}

function processPlaces (string) {
  console.log('This place: ' + string);
}

var places = ['Portland', 'San Diego', 'Seattle', 'Philadelphia', 'New York City'];

console.log(beenHere(processPlaces, places));
