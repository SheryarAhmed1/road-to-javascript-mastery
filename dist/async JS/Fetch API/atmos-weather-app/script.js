// API Configuration
const API_KEY = "da574a1c83ae4211b58100527262611";
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

// Selecting Elements
const searchForm = document.querySelector("#searchForm");
const cityInput = document.querySelector("#cityInput");

const searchBtn = document.querySelector("#searchBtn");
const btnText = document.querySelector("#btnText");
const loader = document.querySelector("#loader");

const weatherContainer = document.querySelector("#weatherContainer");
const emptyState = document.querySelector("#emptyState");
const errorMessage = document.querySelector("#errorMessage");

const celsiusBtn = document.querySelector("#celsiusBtn");
const fahrenheitBtn = document.querySelector("#fahrenheitBtn");

// Variables
let weatherData = null;
let currentUnit = "C";

// Search Form Event
searchForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const city = cityInput.value.trim();
    if (city === "") {
        showError("Please enter a city name.");
        return;
    }

    getWeather(city);
});

// Fetch Weather Data
async function getWeather(city) {
    try {
        // Loading State
        setLoading(true);

        errorMessage.classList.add("hidden");

        const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=yes`;

        const response = await fetch(url);

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || "Unable to fetch weather.");
        }

        // Store API Response
        weatherData = data;

        // Display Weather
        displayWeather(data);

        emptyState.classList.add("hidden");
        weatherContainer.classList.remove("hidden");
    }

    catch (error) {
        showError(error.message);
    }
    finally {
        setLoading(false);
    }
}

// Display Weather
function displayWeather(data) {
    const location = data.location;
    const current = data.current;

    document.querySelector("#cityName").textContent =
        location.name;

    document.querySelector("#regionName").textContent =
        `${location.region ? location.region + ", " : ""}${location.country}`;

    document.querySelector("#condition").textContent =
        current.condition.text;

    document.querySelector("#weatherIcon").src =
        "https:" + current.condition.icon;

    document.querySelector("#humidity").textContent =
        current.humidity + "%";

    document.querySelector("#wind").textContent =
        current.wind_kph + " km/h";

    document.querySelector("#uv").textContent =
        current.uv;

    document.querySelector("#pressure").textContent =
        current.pressure_mb + " mb";

    document.querySelector("#localTime").textContent =
        location.localtime;

    document.querySelector("#lastUpdated").textContent =
        current.last_updated;

    // Temperature
    updateTemperature();

    // Air Quality

    displayAQI(current.air_quality);

}

// Celsius / Fahrenheit Conversion
function updateTemperature() {
    if (!weatherData) return;

    const current = weatherData.current;

    const temperature = currentUnit === "C"
        ? current.temp_c
        : current.temp_f;

    const feelsLike = currentUnit === "C"
        ? current.feelslike_c
        : current.feelslike_f;

    document.querySelector("#temperature").textContent =
        Math.round(temperature);

    document.querySelector("#feelsLike").textContent =
        Math.round(feelsLike);

    document.querySelector("#unit").textContent =
        "°" + currentUnit;

    // Active Button Styling
    celsiusBtn.className = currentUnit === "C"
        ? "px-3 py-1.5 rounded-full bg-blue-600 text-sm"
        : "px-3 py-1.5 rounded-full text-sm text-slate-300";

    fahrenheitBtn.className = currentUnit === "F"
        ? "px-3 py-1.5 rounded-full bg-blue-600 text-sm"
        : "px-3 py-1.5 rounded-full text-sm text-slate-300";

}

// Temperature Buttons
celsiusBtn.addEventListener("click", function () {

    currentUnit = "C";
    updateTemperature();

});
fahrenheitBtn.addEventListener("click", function () {
    currentUnit = "F";
    updateTemperature();
});

// Display Air Quality
function displayAQI(airQuality) {
    const aqi = airQuality?.["us-epa-index"];

    const aqiValue = document.querySelector("#aqiValue");
    const aqiStatus = document.querySelector("#aqiStatus");

    if (aqi == null) {
        aqiValue.textContent = "N/A";
        aqiStatus.textContent = "Unavailable";
        return;
    }

    const aqiLevels = {
        1: { text: "Good", color: "bg-green-500/20 text-green-300" },
        2: { text: "Moderate", color: "bg-yellow-500/20 text-yellow-300" },
        3: { text: "Unhealthy for sensitive groups", color: "bg-orange-500/20 text-orange-300" },
        4: { text: "Unhealthy", color: "bg-red-500/20 text-red-300" },
        5: { text: "Very Unhealthy", color: "bg-purple-500/20 text-purple-300" },
        6: { text: "Hazardous", color: "bg-rose-600/20 text-rose-300" }
    };
    const result = aqiLevels[aqi];

    aqiValue.textContent = aqi;
    aqiStatus.textContent = result?.text || "Unknown";
    aqiStatus.className =
        result?.color + " px-4 py-2 rounded-full text-sm";

}

// Quick City Search
const cityButtons = document.querySelectorAll(".city-btn");
cityButtons.forEach(function (button) {

    button.className =
        "glass px-4 py-2 rounded-full text-sm text-slate-300 hover:bg-blue-600 hover:text-white transition";

    button.addEventListener("click", function () {
        const city = button.dataset.city;
        cityInput.value = city;
        getWeather(city);
    });
});

// Loading Function
function setLoading(isLoading) {
    searchBtn.disabled = isLoading;
    searchBtn.classList.toggle("opacity-70", isLoading);
    btnText.textContent = isLoading
        ? "Searching..."
        : "Search Weather";

    loader.classList.toggle("hidden", !isLoading);
}

// Error Handling
function showError(message) {
    errorMessage.textContent = "⚠️ " + message;
    errorMessage.classList.remove("hidden");
}

// Default City
getWeather("Islamabad");