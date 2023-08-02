import { fetchForecast, fetchWeather } from './APIservice.js';
import { renderWidgetForecast,  renderWidgetToday,  showError } from './renderWidget.js';

export const startWidget = async ( widget) => {

	if (!widget) {
		widget = document.createElement('div');
		widget.classList.add('calendar')
	}

	const dataWeather = await fetchWeather()

	if (dataWeather.success) {
		renderWidgetToday(widget, dataWeather.data);
	
	} else {
		showError(dataWeather.error)
	}

	const dataForecast = await fetchForecast()

	if (dataForecast.success) {
		renderWidgetForecast(widget, dataForecast.data);
	} else {
		showError(dataForecast.error)
	}
		
	return widget
}

export default startWidget;