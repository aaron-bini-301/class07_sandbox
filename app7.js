function higherOrder (name) {
  var nameMessage = '<li>Hi' + name + ', let\'s learn about closures.</li>';
  var rules = '<li>If a function returns a function, that function will have access to the variables within the original function.</li>';
  var closure = '<li>This means that the returned function has "closed over" the variables that were set in the environment in which it was created.</li>';
  var description = '<li>So, when the closure is called outside of the original function, it will be able to display these list items that were set in the original function.</li>';
  $('#content2').html(nameMessage);
  function letsTalkClosures() {
    $('#content').html(rules + closure + description);
  }
  return letsTalkClosures;
}
var makeList = higherOrder('Aaron');
console.log(higherOrder);
console.log(makeList);
$('button').on('click', function () {
  makeList();
});
