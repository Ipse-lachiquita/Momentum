const API_KEY = '5166d11229b76ddd7d432d4b07182a01'

function onGeoOk(position) {
  const lat = position.coords.latitude
  const lng = position.coords.longitude
  console.log('You live in ', lat, lng)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector('#weather span:first-child')
      const city = document.querySelector('#weather span:last-child')
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
      city.innerText = data.name
    }),
  )
}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
