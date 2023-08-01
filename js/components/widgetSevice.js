import { fetchForecast, fetchWeather } from './APIservice.js';
import { renderWidgetForecast,  showError } from './renderWidget.js';

export const startWidget = async ( widget) => {

	if (!widget) {
		widget = document.createElement('div');
		widget.classList.add('calendar')
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