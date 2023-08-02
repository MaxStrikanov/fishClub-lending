import { addZero,  getCurrentDataTime } from './helper.js';
const currentDataTime = getCurrentDataTime();


export const renderWidgetForecast = (widget, data) => {
	
	const forecast = data.list.filter(item => 
		new Date(item.dt_txt).getHours() === 12 
		
	);
	
	const items = forecast.map((item) => {
		const date = new Date(item.dt_txt);
		const weekdays = [
			'воскресенье',
			'понедельник',
			'вторник',
			'среда',
			'четверг',
			'пятница',
			'суббота',
			
		]
		const dayOfWeek = weekdays[date.getDay()];

		function randomColor() {
			
		}


		function colorCircle ()  {
			let color = '#F19450'
			if(dayOfWeek == 'воскресенье' || dayOfWeek == 'суббота') {
				color = '#6BAE37'
			}
			return color
		}
		const widgetDayItem = document.createElement('div');

		widgetDayItem.className = 'calendar-item';
		widgetDayItem.insertAdjacentHTML('beforeend', `
		<div class="calendar-day">
				<div class="week-day">${dayOfWeek}</div>
				<div class="data-short">${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}</div>
			</div>
			<div class="weather-img">
				<img src="/icon/${item.weather[0].icon}.svg" alt="">
				<p class="weather-description">${item.weather[0].description}</p>
			</div>
			<div class="weather-deg">${(item.main.temp - 273.15).toFixed(0)}°</div>
			<div class="weather-wind">
				<div class="weather-wind_route">
					<img style = "transform: rotate(${135 + item.wind.deg}deg);" src="/icon/wind.svg" alt="">
				</div>
				<div class="weather-wind_speed">${(item.wind.speed).toFixed(0)} м/c</div>
			</div>
			<div class="weather-pressure">
				<div class="weather-pressure_num">${(item.main.pressure * 0.75).toFixed(0)}</div>
				<div class="weather-pressure_text">мм рт. ст.</div>
			</div>
			<div class="percent">
					<svg>
						<circle cx="30" cy="30" r="30"></circle>
						<circle cx="30" cy="30" r="30" style = "stroke-dashoffset: calc(340px - (340px * 81) / 100); stroke:${colorCircle()};">
						</circle>
					</svg>
					<div class="percent-num">72%</div>
            	</div>
				<div class="percent">
					<svg>
						<circle cx="30" cy="30" r="30"></circle>
						<circle cx="30" cy="30" r="30" style = "stroke-dashoffset: calc(340px - (340px * 78) / 100); stroke: ${colorCircle()}">
						</circle>
					</svg>
					<div class="percent-num">72%</div>
            	</div>
				<div class="percent">
					<svg>
						<circle cx="30" cy="30" r="30"></circle>
						<circle cx="30" cy="30" r="30" style = "stroke-dashoffset: calc(340px - (340px * 87) / 100); stroke: ${colorCircle()};">
						</circle>
					</svg>
					<div class="percent-num">72%</div>
            	</div>
		`);

		return widgetDayItem;
	})

	widget.append(...items)
	

}; 





export const showError = (widget, error) => {
	widget.textContent = error;
	widget.classList.add('widget_error')
}