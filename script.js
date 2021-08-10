/* 
    Credits to: 
    https://www.youtube.com/watch?v=cuEtnrL9-H0 
    https://www.youtube.com/watch?v=WZNG8UomjSI
*/

const getWeatherInfo = (event)  => {
    // Get the user input
    const cityInput = document.getElementById("userInputCity").value;
    console.log("WE GOT THE USER INPUT: ", cityInput);

    //then reset user input to empty string
    document.getElementById("userInputCity").value = "";

    // attributes that will be later added to the API URL
    const API_KEY = 'c4fbf5081c822eb86e929a167a3c059c';
    const city = cityInput;
    let tempertureUnit = 'metric'; 

    //Create the URL and fetch the info
    const WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${tempertureUnit}&appid=${API_KEY}`;
    const promise = fetch(WEATHER_URL);
    //so when you fetch you find out its a type of promise
    promise
        .then(function(result){
            const processingPromise = result.json(); //getting the result as a json
            return processingPromise
        })
        .then(function(processedResponse){
            const data = processedResponse; //now we are getting the data
            console.log(data);
            displayWeather(data); //send the data to displayWeather function
        })  
}

const displayWeather = (data) => {
    
}
