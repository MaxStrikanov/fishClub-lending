
export const calendaryFish = async () => {
    const dataCurrent = document.querySelectorAll('.fish-cards-data__day')
    const weekDay = document.querySelectorAll('.week-day');
    const percent = document.querySelectorAll('.calendar-item .percent svg circle:last-child');
    const percentNum = document.querySelectorAll('.calendar-item .percent-num')
	const calendarIem  = document.querySelectorAll('.calendar-item')
	console.log(percent);
	console.log(calendarIem);
	function randomNumb(min, max) {
		return (Math.random() * (max - min) + min).toFixed(0)
	}

	let nibbleHigh = randomNumb(81, 97);
	const nibbleMedium = randomNumb(61, 80);
	const nibbleLow = randomNumb(45, 60);

	const filterFish =  () => {
		for(let i = 0; i < weekDay.length; i++) {
		if (weekDay[i].textContent === 'воскресенье') {
			percent[i+8].style.cssText = `stroke-dashoffset: calc(340px - (340px * ${nibbleHigh}) / 100); stroke: #6BAE37;`
			percentNum[i+8].textContent = `${nibbleHigh}%`
			
		}

		
	}}
	filterFish()
}