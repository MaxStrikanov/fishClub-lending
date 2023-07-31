const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '0259aba2438dc40278af3cdf58ce6ae5';

export const fetchWeather = async () => {
	try {
		const response = await fetch(`${API_URL}weather?q=Москва&appid=${API_KEY}&lang=ru`);
		if (!response.ok) {
			throw new Error('Ошибка запроса')
		}
		const data = await response.json();
		return {success: true, data}
	} catch(error) {
		return {success: false, error}
	}
}

export const fetchForecast = async () => {
	try {
		const response = await fetch(`${API_URL}forecast?q=Москва&appid=${API_KEY}&lang=ru`);
		if (!response.ok) {
			throw new Error('Ошибка запроса')
		}
		const data = await response.json();
		return {success: true, data}
	} catch(error) {
		return {success: false, error}
	}
}

