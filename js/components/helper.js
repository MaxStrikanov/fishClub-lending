export const addZero = (n) => n < 10 ? `0${n}` : n

export const getCurrentDataTime = () => {
	const months = [
		'01',
		'02',
		'03',
		'04',
		'05',
		'06',
		'07',
		'08',
		'09',
		'10',
		'11',
		'12'
	];

	const weekdays = [
		'воскресенье',
		'понедельник',
		'вторник',
		'среда',
		'четверг',
		'пятница',
		'суббота'
	]

	const date = new Date();
	const dayOfMonth = date.getDate()
	const month = months[date.getMonth()]
	const year = date.getFullYear()
	const dayOfWeek = weekdays[date.getDay()] 

	const hours = addZero(date.getHours());
	const minutes = addZero(date.getMinutes());

	return {month, year, dayOfMonth, dayOfWeek, hours, minutes}
}

export const getWindDirection = (deg) => {
	const directions = [
		'&#8593;',
		'&#8599;',
		'&#8594;',
		'&#8600;',
		'&#8595;',
		'&#8601;',
		'&#8592;',
		'&#8598;'
	];

	const i = Math.round(deg / 45) % 8;

	return directions[i]
}

export const calculateDewPoint = (temp, humidity) => {
		
	const a  = 17.27;
	const b  = 237.7;

	const ft = (a * temp) / (b + temp) + Math.log(humidity / 100);
	const dewPoint = (b * ft) / (a - ft);

	return dewPoint.toFixed(1)
		
}






