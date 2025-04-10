
        //dữ liệu mẫu
    const weatherData = {
        "Hà Nội": {
        temperature: 25,
    humidity: 70,
    windSpeed: 5,
    description: "Có mây",
    icon: "☁️"
            },
    "Hồ Chí Minh": {
        temperature: 32,
    humidity: 75,
    windSpeed: 7,
    description: "Nắng",
    icon: "☀️"
            },
    "Đà Nẵng": {
        temperature: 28,
    humidity: 82,
    windSpeed: 12,
    description: "Mưa rào",
    icon: "🌧️"
            }
        };

    function getWeather() {
            const cityInput = document.getElementById("cityInput").value.trim();
    const weatherCard = document.getElementById("weatherCard");
    const error = document.getElementById("error");
    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const humidity = document.getElementById("humidity");
    const windSpeed = document.getElementById("windSpeed");
    const description = document.getElementById("description");
    const weatherIcon = document.getElementById("weatherIcon");

    //an thẻ thông tin và lỗi trước khi xử lý
    weatherCard.classList.remove("show");
    error.classList.remove("show");

    if (weatherData[cityInput]) {
                const weather = weatherData[cityInput];
    cityName.textContent = cityInput;
    temperature.textContent = weather.temperature;
    humidity.textContent = weather.humidity;
    windSpeed.textContent = weather.windSpeed;
    description.textContent = weather.description;
    weatherIcon.textContent = weather.icon;
    weatherCard.classList.add("show");
            } else {
        error.classList.add("show");
            }
        }
