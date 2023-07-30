// import checkingСertificate  from '../components/xlsx.js';
// import toggleMenu from '../components/menu.js';
// import slider from '../components/slider.js'


// document.addEventListener('load' , checkingСertificate())
// toggleMenu();
// slider();

const dataCurrent = document.querySelectorAll('.fish-cards-data__day')
const weekDay = document.querySelectorAll('.week-day');
const percent = document.querySelectorAll('.percent svg circle:last-child');
const percentNum = document.querySelectorAll('.percent-num')
console.log(weekDay);
function randomNumb(min, max) {
	return (Math.random() * (max - min) + min).toFixed(0)
}

const nibbleHigh = randomNumb(81, 97);
const nibbleMedium = randomNumb(61, 80)
const nibbleLow = randomNumb(45, 60)

document.addEventListener("DOMContentLoaded", 
weekDay.forEach((elem, i) => {
	if (elem.textContent === 'воскресенье') {
		percent[i].style.cssText = `stroke-dashoffset: calc(340px - (340px * ${nibbleHigh}) / 100); stroke: #6BAE37;`
		percentNum[i].textContent = `${nibbleHigh}%`
	}

	else if (elem.textContent === 'вторник') {
		percent[i].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${nibbleMedium}) / 100); stroke: #F3CD44;`
		percentNum[i].textContent = `${nibbleMedium}%`
	}

	else if (elem.textContent === 'понедельник') {
		percent[i].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${nibbleLow}) / 100); stroke: #F19450;`
		percentNum[i].textContent = `${nibbleLow}%`
	}
}))

function GetDates() {
    const aryDates = [];
    for (let i = 0; i <= 7; i++) {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + i);
        aryDates.push(currentDate.toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'numeric'
}));
    }
    return aryDates;
}

const aryDates = GetDates();

dataCurrent.forEach((item, i) => {
    item.textContent = aryDates[i]
})