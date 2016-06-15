var numbers = [15, -6, 39, -98, 44, 232, 86, 22, 2, 1, 4, 54, 99, 234];

$('#content').html('<li>' + numbers + '</li>');

function multiplyByThree (num) {
  return num * 3;
}

function removeOdds (num) {
  return num % 2 === 0;
}

function sumItUp (prev, curr) {
  return prev + curr;
}

function chainIt() {
  $('#content').html(numbers.map(function(num){
    return num * 3;
  }).filter(function(num){
    return num % 2 === 0;
  }).reduce(function(prev, curr){
    return prev + curr;
  })
  );
}

$('button').on('click', chainIt);
