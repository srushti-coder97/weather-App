console.log("JS is working");

document.addEventListener("DOMContentLoaded", () => {

  const apiKey = "e70be909218940d3fc4b8cae9b899dba";
  const input = document.getElementById("cityInput");
  const button = document.getElementById("searchBtn");

  button.addEventListener("click", () => {
    const city = input.value.trim();

    if (city === "") {
      alert("Please enter a city name");
      return;
    }

    console.log("Searching for:", city);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        console.log(data); 

        if (data.cod == "404") {
          alert("City not found!");
          return;
        }
 
        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = data.main.temp + "°C";
        document.querySelector(".weather").innerText = data.weather[0].description;
      })
      .catch(err => {
        console.error(err);
        alert("Something went wrong!");
      });
  });

});