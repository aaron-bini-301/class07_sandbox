var carArray = [
  {
    name: '4Runner',
    make: 'Toyota',
  },
  {
    name: 'Tacoma',
    make: 'Toyota',
  },
  {
    name: 'Outback',
    make: 'Subaru',
  },
  {
    name: 'Impreza',
    make: 'Subaru',
  },
];

var toyotas = carArray.filter(function(element){
  return element.make === 'Toyota';
});
console.log(toyotas);
var toyotasH1 = toyotas.forEach(function(el){
  console.log(el.make);
  $('#content').append('<h1>' + el.make + ' ' + el.name + '</h1>');
});
