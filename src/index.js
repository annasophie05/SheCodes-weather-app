function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let city = searchInputElement.value;
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = city;
    let apiKey = "1a1c91004be79f6e4446ab6cad35o0tf";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(displayTemperature);
  }
  
  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  let currentDateELement = document.querySelector("#current-date");
  let currentDate = new Date();
  
  currentDateELement.innerHTML = formatDate(currentDate);
  
  function displayTemperature(response) {
    let cityElement = document.querySelector("#current-city");
    let city = response.data.city;
    let temperature = Math.round(response.data.temperature.current);
    cityElement.innerHTML = city;
    let currentTemperatureValue = document.querySelector(
      ".current-temperature-value"
    );
    currentTemperatureValue.innerHTML = `${temperature}°C`;
    console.log(response.data);
  }