function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}&aqi=no`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error.message);
                return;
            }

            document.getElementById("cityName").innerText =
                `${data.location.name}, ${data.location.country}`;

            document.getElementById("temperature").innerText =
                `🌡 Temperature: ${data.current.temp_c} °C`;

            document.getElementById("condition").innerText =
                `☁ Condition: ${data.current.condition.text}`;

            document.getElementById("humidity").innerText =
                `💧 Humidity: ${data.current.humidity}%`;

            document.getElementById("wind").innerText =
                `💨 Wind Speed: ${data.current.wind_kph} km/h`;

            document.getElementById("weatherIcon").src =
                `https:${data.current.condition.icon}`;
        })
        .catch(error => {
            alert("Error fetching weather data");
            console.error(error);
        });
}

