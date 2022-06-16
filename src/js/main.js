const cityName = document.querySelector('#city-name')
const input = document.querySelector('#city-input')
const weatherAnswer = document.querySelector('#weather-answer')
const temperatureAnswer = document.querySelector('#temperature-answer')
const checkBtn = document.querySelector('#checkBtn')
const error = document.querySelector('#app-error')

const API_LINK = `https://api.openweathermap.org/data/2.5/weather?q=`
const API_KEY = '&appid=0cd6efd13256d5aa24c4f4c0ffd56a31&units=metric'

const getWeather = () => {
	const inputCity = input.value || `London`
	const URL = API_LINK + inputCity + API_KEY

	axios
		.get(URL)
		.then(res => {
			cityName.textContent = res.data.name
			weatherAnswer.textContent = res.data.weather[0].main
			temperatureAnswer.textContent = Math.floor(res.data.main.temp) + '°C'

			input.value = ''
			error.style.visibility = 'hidden'
		})
		.catch(() => {
			error.style.visibility = 'visible'
			input.value = ''
		})
}

const checkEnter = e => {
	if (e.keyCode === 13) {
		getWeather()
	}
}

getWeather()

input.addEventListener('keyup', checkEnter)
checkBtn.addEventListener('click', getWeather)
