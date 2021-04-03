$('#city-name').focus().on('keypress',showWeather);

async function showWeather(event){
    if(event.which === 13){
        //get City Name
        const cityName = event.target.value;
        event.target.value = "";
        
        $('#default-text').text("I need a City name to do something.");
        $('#default-div').hide();
        
        if(cityName === ""){
            console.log("input box is empty.");
            alert('Enter a valid City name and then press enter.');
            $('#city-country-name').text("");
            $('#current-date').text("");
            $('#current-temp').text("");
            $('#today-atmos').text("");
            $('#today-min-max-temp').text("");
            $('#default-div').show();
        }
        else{
            console.log('City Name: ' + cityName + '\n\n');
                
            //get WeatherData
            const weatherData = await getWeatherData(cityName);
            console.log(weatherData);

            //fill WeatherData
            fillWeatherData(weatherData);
        }
    }
}

//Get the weather data for the cityName
function getWeatherData(cityName){
    const api_key = '14ea8664025c5da2617a1f4555c094db';
    const currentTimeMillis = new Date().getTime();
    console.log(currentTimeMillis);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&date=${currentTimeMillis}&APPID=${api_key}`;
    console.log(url);
    const weatherData = fetch(url)
    .then(handleErrors)
    .then(data => {
        console.log(data);
        return data.json();
    })
    .then(parsedData => {
        console.log(parsedData);
        return parsedData;
    })
    .catch(err => {
        console.log("\n\nError");
        console.log(err);
        return "" + err;
    });
    return weatherData;
}

//fill the weather data in the weather-box
function fillWeatherData(weatherData){
    if(weatherData.cod === "404"){
        $('#city-country-name').text("");
        $('#current-date').text("");
        $('#current-temp').text("");
        $('#today-atmos').text("");
        $('#today-min-max-temp').text("");
        $('#default-text').text("No Data Available with this City name, please try again.");
        $('#default-div').show();
    }
    else if(weatherData.cod === 200){
        console.log('Alright! we got some good response.');
        $('#city-country-name').text(weatherData.name + ', ' + weatherData.sys.country);
        const date = new Date(weatherData.dt*1000);
        console.log(date);
        const Weeks = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const day = Weeks[date.getDay()];
        const dateNo = date.getDate();
        const Months = ["January","February","March","April","May","June",
            "July","August","September","October","November","December"];
        const month = Months[date.getMonth()];
        const year = date.getFullYear();
        const formattedDate = `${day} ${dateNo} ${month} ${year}`;
        console.log("Formatted Date: "+formattedDate);
        $('#current-date').text(""+formattedDate);
        const baseTemp = 273.15;
        const currentTemp = Math.round(weatherData.main.temp - baseTemp);

        console.log(currentTemp);
        $('#current-temp').text('' + currentTemp + "°c");
        $('#today-atmos').text(weatherData.weather[0].main);
        const minTemp = Math.round(weatherData.main.temp_min - baseTemp);
        const maxTemp = Math.round(weatherData.main.temp_max - baseTemp);
        $('#today-min-max-temp').text(minTemp + '°c / ' + maxTemp + '°c');
    }
    else{
        console.log('Something went wrong');
    }
}

//for handling errors
function handleErrors(response) {
    // if (!response.ok) {
    //     throw Error(response.statusText);
    // }
    console.log(response);
    return response;
}