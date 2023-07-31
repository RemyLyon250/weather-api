function getWeather() {
    const apiKey = '80be88efbbdc9914431849fb3ccd6b96'; 
    const cityInput = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;

            const weatherHTML = `
                <h2>${cityName}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
                <img src="https://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
            `;

            weatherInfo.innerHTML = weatherHTML;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p>Unable to fetch weather data. Please try again later.</p>';
        });
}
