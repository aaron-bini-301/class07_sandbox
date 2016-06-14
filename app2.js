var numberCount = [1, 2, -1, -2, 1, 2, -1, -2];
var sum = 0;
var numberTotal = numberCount.reduce(function(prev, curr){
  return prev + curr;
}, sum);
$('#content').append('<h1>' + numberTotal + '</h1>');
console.log(numberCount);
console.log(numberTotal);
