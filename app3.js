var numberCount = [1, 6, 10, 5, 4, 3, 67, 88, 98];
console.log(numberCount);
var ordered = numberCount.sort(function(prev, curr){
  return prev - curr;
});

$('#content').append('<h1>' + ordered + '</h1>');
console.log(numberCount);
console.log(ordered);
