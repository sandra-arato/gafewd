function loadWeather(city, countryCode){
  $.ajax("http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + countryCode, {dataType:"jsonp", success:function(result){
    renderWeather(result);
  }})
}

//  Render out the weather based on the data we have loaded.

function renderWeather(data) {
	console.log("data" + data);
	var weather = data.weather[0];

	document.write("<h1>" + data.name + "</h1>" + data.weather[0].description + "<br />");

	document.write("<img src='http://openweathermap.com/img/w/" + weather.icon + ".png' />");

};

$(document).ready(function() {
  loadWeather("Budapest", "hu")
});
