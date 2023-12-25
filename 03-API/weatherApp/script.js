const button = document.getElementById('searchButton');
const input = document.getElementById('cityNameInput');
const cityName = document.getElementById('fCityName');
const cityTemp = document.getElementById('fCityTemp');
const cityWeather = document.getElementById('fCityCondition');


async function getData (enteredCityName) {
  
  const promise = await fetch (
    `http://api.weatherapi.com/v1/current.json?key=3d3dd43aa77149eaa8d15206232512&q=${enteredCityName}&aqi=yes`
  )
  
  return await promise.json();
};

button.addEventListener('click', async () => {
  const inputValue = input.value;
  const result = await getData(inputValue)
  
  cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
  cityTemp.innerText = result.current.temp_c
  cityWeather.innerText = result.current.condition.text
});
