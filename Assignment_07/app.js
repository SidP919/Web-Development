$('#city-name')//input element
.focus()//brings the focus/cursor inside input box
.on('keypress',showWeather);//calls showWeather() on a keypress

async function showWeather(event){
    if(event.which === 13){//check if enter key is pressed
        
        event.target.blur();//remove focus/cursor from inside the input box
        
        //get City Name
        const cityName = event.target.value;
        //empty the input box
        event.target.value = "";
        
        //change value of default-text element to its default value
        $('#default-text').text("I need a City name to do something.");
        //hide default-div element
        $('#default-div').hide();
        
        if(cityName === ""){//if cityName is empty
            console.log("input box is empty.");
            alert('Enter a valid City name and then press enter.');
            $('#city-country-name').text("");
            $('#current-date').text("");
            $('#current-temp').text("");
            $('#today-atmos').text("");
            $('#today-min-max-temp').text("");
            //show default-div element
            $('#default-div').show();
        }
        else{//if cityName is not empty
            
            console.log('City Name: ' + cityName + '\n\n');
                
            //get WeatherData
            const weatherData = await getWeatherData(cityName);
            console.log(weatherData);

            //fill WeatherData in required fields
            fillWeatherData(weatherData);
        }
    }
}

//Get the weather data for the cityName
function getWeatherData(cityName){

    //api-key
    const api_key = '14ea8664025c5da2617a1f4555c094db';
    
    //get current time
    const currentTimeMillis = new Date().getTime();
    console.log(currentTimeMillis);
    
    //full url with query
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&date=${currentTimeMillis}&APPID=${api_key}`;
    console.log(url);
    
    //get weather data
    const weatherData = fetch(url)
    .then(rawData => {//get response
        console.log(rawData);
        return rawData.json();
    })
    .then(parsedData => {//get parsed response
        console.log(parsedData);
        return parsedData;
    })
    .catch(err => {//if fetch is rejected
        console.log(err);
        return err;
    });

    return weatherData;
}

//fill the weather data in the weather-box
function fillWeatherData(weatherData){
    
    if(weatherData.cod === "404"){//if no data available for required cityName
        
        $('#city-country-name').text("");
        $('#current-date').text("");
        $('#current-temp').text("");
        $('#today-atmos').text("");
        $('#today-min-max-temp').text("");
        $('#default-text').text("No Data Available with this City name, please try again.");
        //show default-div element
        $('#default-div').show();
    }
    else if(weatherData.cod === 200){//if we got data in response for required cityName

        console.log('Alright! we got some response.');
        
        //fill the data that we have got in response in required fields
        $('#city-country-name').text(weatherData.name + ', ' + weatherData.sys.country);
        
        //get date millis from response:
        const date = new Date(weatherData.dt*1000);
        //get weeekday fullname:
        const Weeks = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const day = Weeks[date.getDay()];
        //get day number:
        const dateNo = date.getDate();
        //get month fullname:
        const Months = ["January","February","March","April","May","June",
            "July","August","September","October","November","December"];
        const month = Months[date.getMonth()];
        //get year number
        const year = date.getFullYear();
        //create date in required format:
        const formattedDate = `${day} ${dateNo} ${month} ${year}`;
        console.log("Formatted Date: "+formattedDate);
        //fill formattedDate in current-date element:
        $('#current-date').text(""+formattedDate);

        //fill current-temp element
        const baseTemp = 273.15;
        const currentTemp = Math.round(weatherData.main.temp - baseTemp);
        console.log(currentTemp);
        $('#current-temp').text('' + currentTemp + "°c");

        //fill today-atmos element
        $('#today-atmos').text(weatherData.weather[0].main);
        
        //fill today-min-max-temp element
        const minTemp = Math.round(weatherData.main.temp_min - baseTemp);
        const maxTemp = Math.round(weatherData.main.temp_max - baseTemp);
        $('#today-min-max-temp').text(minTemp + '°c / ' + maxTemp + '°c');
    
    }
    
    else{//if we faced some other error, like due to internet issue or web api server down issue

        console.log('Something went wrong');
        $('#city-country-name').text("");
        $('#current-date').text("");
        $('#current-temp').text("");
        $('#today-atmos').text("");
        $('#today-min-max-temp').text("");
        $('#default-text').text("Something went wrong!")
            .append("<p>Please check your internet connection or try again after some time.</p>");
        //show default-div element
        $('#default-div').show();
    }
}