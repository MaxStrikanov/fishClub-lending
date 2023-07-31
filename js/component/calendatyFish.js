
export const calendaryFish = async () => {
    const dataCurrent = document.querySelectorAll('.fish-cards-data__day')
    const weekDay = document.querySelectorAll('.week-day');
    const percent = document.querySelectorAll('.percent svg circle:last-child');
    const percentNum = document.querySelectorAll('.percent-num')

function randomNumb(min, max) {
	return (Math.random() * (max - min) + min).toFixed(0)
}

let nibbleHigh = randomNumb(81, 97);
const nibbleMedium = randomNumb(61, 80);
const nibbleLow = randomNumb(45, 60);

const filterFish = () => {
    for(let i = 0; i < weekDay.length; i++) {
    if (weekDay[i].textContent === 'воскресенье') {
		percent[i].style.cssText = `stroke-dashoffset: calc(340px - (340px * ${nibbleHigh}) / 100); stroke: #6BAE37;`
		percentNum[i].textContent = `${nibbleHigh}%`
        percent[i + 12].style.cssText = `stroke-dashoffset: calc(340px - (340px * ${randomNumb(81, 97)}) / 100); stroke: #6BAE37;`
		percentNum[i + 12].textContent = `${randomNumb(81, 97)}%`
	}

	else if (weekDay[i].textContent === 'вторник') {
		percent[i].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${nibbleMedium}) / 100); stroke: #F3CD44;`
		percentNum[i].textContent = `${nibbleMedium}%`
		percent[i + 6].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${randomNumb(81, 97)}) / 100); stroke: #F19450;`
		percentNum[i + 6].textContent = `${randomNumb(81, 97)}%`
        percent[i + 12].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${randomNumb(62, 79)}) / 100); stroke: #F3CD44;`
		percentNum[i + 12].textContent = `${randomNumb(62, 79)}%`
	}

	else if (weekDay[i].textContent === 'понедельник') {
		percent[i].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${nibbleLow}) / 100); stroke: #F19450;`
		percentNum[i].textContent = `${nibbleLow}%`
		percent[i + 6].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${randomNumb(81, 97)}) / 100); stroke: #F19450;`
		percentNum[i + 6].textContent = `${randomNumb(81, 97)}%`
        percent[i + 12].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${randomNumb(60, 80)}) / 100); stroke: #F19450;`
		percentNum[i + 12].textContent = `${randomNumb(60, 80)}%`
	}
    else if (weekDay[i].textContent === 'среда') {
		percent[i].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${nibbleLow}) / 100); stroke: #F19450;`
		percentNum[i].textContent = `${nibbleLow}%`
		percent[i + 6].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${randomNumb(81, 97)}) / 100); stroke: #F19450;`
		percentNum[i + 6].textContent = `${randomNumb(81, 97)}%`
        percent[i + 12].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${nibbleLow}) / 100); stroke: #F19450;`
		percentNum[i + 12].textContent = `${nibbleLow}%`
	}
    else if (weekDay[i].textContent === 'четверг') {
		percent[i].style.cssText = `stroke-dashoffset: calc(250px - (250px * ${nibbleLow}) / 100); stroke: #F19450;`
		percentNum[i].textContent = `${nibbleLow}%`
		percent[i + 6].style.cssText = `stroke-dashoffset: calc(250px - (250px * ${randomNumb(81, 97)}) / 100); stroke: #F19450;`
		percentNum[i + 6].textContent = `${randomNumb(81, 97)}%`
        percent[i + 12].style.cssText = `stroke-dashoffset: calc(250px - (250px * ${nibbleLow}) / 100); stroke: #F19450;`
		percentNum[i + 12].textContent = `${nibbleLow}%`
	}
    else if (weekDay[i].textContent === 'пятница') {
		percent[i].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${randomNumb(81, 97)}) / 100); stroke: #F19450;`
		percentNum[i].textContent = `${randomNumb(81, 97)}%`
		percent[i + 6].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${randomNumb(81, 97)}) / 100); stroke: #F19450;`
		percentNum[i + 6].textContent = `${randomNumb(81, 97)}%`
        percent[i + 12].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${randomNumb(81, 97)}) / 100); stroke: #F19450;`
		percentNum[i + 12].textContent = `${randomNumb(81, 97)}%`
	}
    else if (weekDay[i].textContent === 'суббота') {
		let nibbleHigh_f1 = randomNumb(81, 97);
		let nibbleHigh_f2 = randomNumb(80, 96);
		let nibbleHigh_f3 = randomNumb(79, 97);
		console.log(nibbleHigh_f1);
		percent[i].style.cssText = `stroke-dashoffset: calc(250px - (250px * ${nibbleHigh_f1}) / 100); stroke:  #6BAE37;`
		percentNum[i].textContent = `${nibbleHigh_f1}%`
		percent[i + 6].style.cssText = `stroke-dashoffset: calc(250px - (250px * ${nibbleHigh_f2}) / 100); stroke:  #6BAE37;`
		percentNum[i + 6].textContent = `${nibbleHigh_f2}%`
        percent[i + 12].style.cssText = `stroke-dashoffset: calc(250px - (250px * ${nibbleHigh_f3}) / 100); stroke:  #6BAE37;`
		percentNum[i + 12].textContent = `${nibbleHigh_f3}%`
	}
}}

document.addEventListener("DOMContentLoaded", filterFish())
// weekDay.forEach((elem, i) => {
// 	if (elem.textContent === 'воскресенье') {
// 		percent[i].style.cssText = `stroke-dashoffset: calc(340px - (340px * ${nibbleHigh}) / 100); stroke: #6BAE37;`
// 		percentNum[i].textContent = `${nibbleHigh}%`
// 	}

// 	else if (elem.textContent === 'вторник') {
// 		percent[i].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${nibbleMedium}) / 100); stroke: #F3CD44;`
// 		percentNum[i].textContent = `${nibbleMedium}%`
// 	}

// 	else if (elem.textContent === 'понедельник') {
// 		percent[i].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${nibbleLow}) / 100); stroke: #F19450;`
// 		percentNum[i].textContent = `${nibbleLow}%`
// 	}
// }))

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
}