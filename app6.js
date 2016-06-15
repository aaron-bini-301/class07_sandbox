var $content = $('#content');

function weatherAdvice(weather) {
  var todaysWeather = weather;
  function wearThis (name, destination) {
    if (todaysWeather === 'rainy') {
      $content.html('Hi ' + name + '. ');
      $content.append('Better grab a rainjacket before heading off to ' + destination + '.');
    } else {
      $content.html('Hi ' + name + '. ');
      $content.append('Looks like nice weather, have fun at ' + destination + '.');
    }
  }
  return wearThis;
}

var rainyWeather = weatherAdvice('rainy');
var sunnyWeather = weatherAdvice('sunny');

$('#rainy').on('click', function() {
  rainyWeather('Aaron', 'the soccer game');
  //outputRainy();
});
$('#sunny').on('click', function() {
  sunnyWeather('Ellen', 'the beach');
  //outputSunny();
});
