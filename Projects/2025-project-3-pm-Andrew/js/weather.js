// weather.js
// Created by: Bruce Elgort / Spring 2023
// Student: Andrew Sabourin

// Function to get Latitude and Longitude from the OpenWeather API

// Declare Variables
const weatherContent = document.querySelector('#weather');
const API_KEY = '<API KEY>';

const getLatLon = (data, zipCode) => {
    // Check to see if an error occurred
    if (data.cod == '400' || data.cod == '404' || data.cod == '401' || zipCode.trim() == '') {
        // Show the initially hidden div
        weatherContent.style.display = 'block';
        // Bootstrap styling
        weatherContent.className = "visible fw-semibold p-3 text-warning-emphasis bg-warning-subtle bg-opacity-10 border border-warning rounded-3";
        weatherContent.innerHTML = 'Please enter a valid Zip Code';
        return; // exit
    } else {
        // return an array of the latitude and longitude
        return [data.lat, data.lon];
    }
}

// get todays weekday and then the 4 weekdays ahead
const getDayNameFromToday = (offset) => {
    // create a variable that holds an array of weekdays (sun=0 - sat=7)
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // create a new date and call it today
    const today = new Date();
    // calculating todays day, then offsetting ahead 4 days, within the 7 day week period.
    const dayIndex = (today.getDay() + offset) % 7;
    // return created index
    return daysOfWeek[dayIndex];
}

// Function to get the current weather given the data and zip code
const getCurrentWeather = (data) => {
    console.log(data);
    // Check to see if the OpenWeather API returned an error 
    if (data.cod == '400' || data.cod == '404' || data.cod == '401') {
        // show the initially hidden div
        weatherContent.style.display = 'block';
        // Bootstrap styling - hidding error
        weatherContent.className = "visible fw-semibold p-3 text-warning-emphasis bg-warning-subtle bg-opacity-10 border border-warning rounded-3";
        weatherContent.innerHTML = 'Please enter a valid Zip Code';
        return; // exit
    }

    // converting time for readablity
    let date = new Date(data.dt * 1000);
    let dateStr = date.toLocaleDateString('en-us');
    let timeStr = date.toLocaleTimeString('en-us');
    // calculate the sunrise using toLocalTimeString 
    let sunRise = new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', {
        // hours in numeric (w/o leading zeros)
        hour: 'numeric',
        // 2 digit (w/ leading zeros)
        minute: '2-digit',
        // 12 hour 
        hour12: true
    });

    // calculate the sunrise using toLocalTimeString 
    let sunSet = new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', {
        // hours in numeric (w/o leading zeros)
        hour: 'numeric',
        // 2 digit (w/ leading zeros)
        minute: '2-digit',
        // 12 hour 
        hour12: true
    });

    // create a div element
    let div = document.createElement('div')

    // Current weather set to the DOM
    div.innerHTML += `
            <div class="container">
                            <div class="row p-3 shadow bg-warning rounded-3 bg-gradient">
                                <div class="col-5">
                                    <div>
                                        <h2 class="mb-1 fs-6">${data.name}</h2>
                                        <p class="mb-1">${dateStr} ${timeStr}</p>
                                    </div>
                                    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description} icon" class="col-4 bg-primary-subtle rounded-3">
                                    <p class="text-capitalize ps-2 fs-semibold mt-2">${data.weather[0].description}</p>
                                    <h3 class="display-3 mb-2">${Math.round(data.main.temp)}°F</h3>
                                </div>
                                <div class="col-7 pt-4">
                                    <ul class="list-unstyled align-center">
                                        <li class="mb-1"><strong>Feels Like</strong> ${Math.round(data.main.feels_like)}°F</li>
                                        <li class="mb-1"><strong>Low</strong> ${Math.round(data.main.temp_min)}°F</li>
                                        <li class="mb-1"><strong>High</strong> ${Math.round(data.main.temp_max)}°F</li>
                                        <li class="mb-1"><strong>Wind Speed</strong> ${Math.round(data.wind.speed)} mph</li>
                                        <li class="mb-1"><strong>Wind Gust</strong> ${Math.round(data.wind.deg)}°</li>
                                        <li class="mb-1"><strong>Cloud Cov.</strong> ${Math.round(data.clouds.all)} %</li>
                                        <l class="mb-1"><strong>Sunrise</strong> ${sunRise}</li>
                                        <li><strong>Sunset</strong> ${sunSet}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
    `
    div.className = "visible"

    // add the icon to the DOM
    weatherContent.append(div);
    weatherContent.style.display = 'block';
};

// display the 5 day weather forecast
const getWeatherForecast = () => {
    // api Key
    const API_KEY = '<API key'
    let zip = document.querySelector("#zip")
    // get zipcode value
    zip = zip.value.trim();
    // api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid={API key}
    // http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}

    // API
    let url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${API_KEY}&units=imperial`

    // fetch info From GEO API (zip code searching)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            // getting lat & lon from API
            let lat = data['lat']
            let lon = data['lon']

            // API
            url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=5&appid=${API_KEY}&units=imperial`

            // fetch info From API
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    // check to see if cod is 200 (good) or 404 (bad)
                    if (data.cod == '400' || data.cod == '404' || data.cod == '401') {
                        weatherContent.style.display = 'block';
                        // Bootstrap 
                        weatherContent.className = "visible fw-semibold p-3 text-warning-emphasis bg-warning-subtle bg-opacity-10 border border-warning rounded-3";
                        weatherContent.innerHTML = 'Please enter a valid Zip Code';
                        return; // exit
                    }

                    // get a handle from #weatherContainer
                    const container = document.querySelector("#weatherContainer");
                    container.innerHTML = ""; // Clear previous results

                    const forecast = document.querySelector('#forecast')
                    forecast.innerText = `Forecast for ${data.city.name}`
                    forecast.style.display = 'block';

                    // forEach #day find the date build a card based on forecast for that day and append to the DOM
                    data.list.forEach((day, i) => {
                        // ln 27 -function
                        const dayOfWeek = getDayNameFromToday(i);
                        // ln 168 -function
                        const card = createWeatherCard(i, day, dayOfWeek);
                        // ln 153 -location in the DOM
                        container.appendChild(card);
                    });
                })
        })
}

// building a card for each day
let createWeatherCard = ((dayId, dayData, dayOfWeek) => {
    // create a div container
    const card = document.createElement("div");
    // Bootstrap styling
    card.className = "card p-2 col-2 col-sm-3 shadow visible border-3 border-primary-subtle bg-primary-subtle bg-gradient";
    // label id as day[]
    card.id = `day${dayId}`;

    // create a header - day of the week 
    const h2 = document.createElement("h2");
    // label the card based on today + 4 days
    h2.innerText = dayOfWeek;
    // Bootstrap styling
    h2.className = "pb-2 mb-4 h4 text-primary text-center border-bottom border-warning"
    card.appendChild(h2);

    // icon
    const icon = document.createElement("img");
    // set the src attribute using the data from the API
    icon.src = `http://openweathermap.org/img/wn/${dayData.weather[0].icon}.png`;
    // set alt text
    icon.alt = `${dayData.weather[0].description} - Icon`;
    card.appendChild(icon);

    // temp 
    const tempH = document.createElement("h3");
    // Bootstrap styling
    tempH.className = "h3 text-center";
    // get temp and round decimal
    tempH.innerText = `${Math.round(dayData.temp.day)}°F`;
    card.appendChild(tempH);

    // decription
    const desc = document.createElement("p");
    // get info from API
    desc.innerText = dayData.weather[0].description;
    // Bootstrap styling
    desc.className = "text-center text-capitalize fw-semi-bold"
    card.appendChild(desc);

    // create a list
    const ul = document.createElement("ul");
    // Bootstrap styling
    ul.className = "ms-n3 list-unstyled";

    // create an array with info from API templated in for versibility
    const details = [
        `Low: ${Math.round(dayData.temp.min)}°F`,
        `High: ${Math.round(dayData.temp.max)}°F`,
        `Feels like: ${Math.round(dayData.feels_like.day)}°F`,
        `Humidity: ${dayData.humidity}%`,
        `Clouds Coverage: ${dayData.clouds}%`,
        `Wind Speed: ${Math.round(dayData.speed)} mph`,
        `Wind Direction: ${dayData.deg}°`, // consider changing this to cardinal directions
        `Precipitation: ${Math.round(dayData.pop * 100)}%`
    ];

    // foreach of the details[] and text (key & values)
    details.forEach(text => {
        // create a li
        const li = document.createElement("li");
        // have key and value as inner text
        li.innerText = text;
        // Bootstrap styling
        li.className = "fw-semi text-nowrap"
        ul.appendChild(li);
    });
    // create list
    card.appendChild(ul);
    return card;
})

// listen for a click on Current button
document.querySelector('#getWeather').addEventListener('click', () => {
    weatherContent.innerHTML = ''; // clear out prior results
    let zipCode = document.querySelector('#zip').value;

    // First call the geolocation API to get the latitude and longitude of the zip code
    let url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},US&appid=${API_KEY}&units=imperial`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            // Call the getLatLon function which returns an array
            const geo = getLatLon(data, zipCode);

            // Now get current weather data
            url = `http://api.openweathermap.org/data/2.5/weather?lat=${geo[0]}&lon=${geo[1]}&appid=${API_KEY}&units=imperial`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    // Call getWeather function based on geo
                    getCurrentWeather(data, geo[0], geo[1]);
                }).catch((e) => { // catch and send a message of that error to the console
                    console.log(`This error occurred: ${e}`);
                });
        }).catch((e) => { // catch and send a message of that error to the console
            console.log(`This error occurred: ${e}`);
        });
});

// listen for Forecast button
document.querySelector('#getForecast').addEventListener('click', () => {
    getWeatherForecast();
})
