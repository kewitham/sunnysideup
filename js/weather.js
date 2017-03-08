jQuery(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/d1d6406161519cfe/geolookup/conditions/q/CA/Los_Angeles.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  //var temp_f = parsed_json['current_observation']['temp_f'];
 // alert("Current temperature in " + location + " is: " + temp_f);
 var conditions = parsed_json['current_observation']['weather'];
 var weathericon = parsed_json['current_observation']['image']['url'];
 //var weatherimage = <img src="weathericon"/>;
 //weatherimage.attr('src', weathericon);
 var weatherlocation = parsed_json['current_observation']['display_location']['full'];
 var currenttemp = parsed_json['current_observation']['temp_f']

	weatherDiv.append("It is " + conditions + " in " + weatherlocation + ". The temperature is " + currenttemp + " degrees fahrenheit.");
	//weatherDiv.append(weatherimage);


  }
  });
});

jQuery(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/d1d6406161519cfe/forecast/q/CA/Los_Angeles.json",
  dataType : "jsonp",
  success : function(parsed_json) {

  	var forecast = parsed_json['forecast']['simpleforecast']['forecastday'];
  	var imageurl = "http://icons.wxug.com/i/c/k/"


	forecast1.prepend(forecast[0]['date']['weekday'] +": " +forecast[0]['conditions'] + " and high of " + forecast[0]['high']['fahrenheit'] + " degrees fahrenheit.");
	forecast2.prepend(forecast[1]['date']['weekday'] +": " +forecast[1]['conditions'] + " and high of " + forecast[1]['high']['fahrenheit'] + " degrees fahrenheit.");
	forecast3.prepend(forecast[2]['date']['weekday'] +": " +forecast[2]['conditions'] + " and high of " + forecast[2]['high']['fahrenheit'] + " degrees fahrenheit.");
	//forecast1.attr('src', forecast[0]['icon_url'])
	$('#weatherpic1').css('background-image',"url("+imageurl+forecast[0]['icon']+".gif)")
	$('#weatherpic2').css('background-image',"url("+imageurl+forecast[1]['icon']+".gif)")
	$('#weatherpic3').css('background-image',"url("+imageurl+forecast[2]['icon']+".gif)")

  }
  });
});

jQuery(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/d1d6406161519cfe/astronomy/q/CA/Los_Angeles.json",
  dataType : "jsonp",
  success : function(parsed_json) {

  	var moon = parsed_json['moon_phase']['phaseofMoon'];
  	var sunrisehour = parsed_json['sun_phase']['sunrise']['hour'];
  	var sunriseminute = parsed_json['sun_phase']['sunrise']['minute'];
  	var sunsethour = parsed_json['sun_phase']['sunset']['hour'];
  	var sunsetminute = parsed_json['sun_phase']['sunset']['minute'];


	$('#moon').append("The phase of the moon is " + moon);
	$('#sunrise').append("Sunrise is at " + sunrisehour + ":" + sunriseminute + " am.");
	$('#sunset').append("Sunset is at " + sunsethour + ":" + sunsetminute + " pm.");
	//forecast1.attr('src', forecast[0]['icon_url'])
  }
  });
});



// $(document).ready(function(){

// 	//var emos = ['sad', 'happy', 'awkward', 'drunk'];

// 	//$('#addWeather').click(displayWeather())




// 		function displayWeather(){ 

// 		var zipcode = $('#weather-input').val().trim();
// 		var queryURL = "http://api.wunderground.com/api/d1d6406161519cfe/conditions/q/CA/San_Francisco.json"
// 		//var queryURL = "api.openweathermap.org/data/2.5/forecast?zip=" + zipcode + ",us&APPID=81d1881810b764881a437f39b5919cc6";
		
// 		$.ajax({url: queryURL, method: 'GET'})

// 		.done(function(response) {

// 			var weatherDiv = $('<div class="weather">');

// 			var weather = response.data.weather.description;

// 			var p_weather = $('<p>').text( "Weather: " + weather);

// 			weatherDiv.append(p_weather);

// 			var city = response.data.name;
			
// 			var cityName = $('<p>').text(city);
			
			
// 			weatherDiv.append(cityName);

// 			$('#weatherView').prepend(cityName);
// 			$('#weatherView').prepend(p_weather);
// 		});
// 	}


// 	// function renderButtons(){ 

// 	// 	$('#buttonsView').empty();

		
// 	// 	for (var i = 0; i < emos.length; i++){

// 	// 	    var a = $('<button>') 
// 	// 	    a.addClass('emote'); 
// 	// 	    a.attr('data-name', emos[i]); 
// 	// 	    a.text(emos[i]); 
// 	// 	    $('#buttonsView').append(a); 
// 	// 	}
// 	// }

	 

// 	// $('#addEmo').on('click', function(){

// 	// 	var emote = $('#emo-input').val().trim();

// 	// 	emos.push(emote);
		
// 	// 	renderButtons();

// 	// 	return false;
// 	// });

	
// 	//$(document).on('click', '#addWeather', displayWeather());

// 	//renderButtons();

// });
// //	});