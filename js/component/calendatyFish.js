
export const calendaryFish = async () => {

    const percent = document.querySelectorAll('.percent svg circle:last-child');
    const percentNum = document.querySelectorAll('.percent-num')

function randomNumb(min, max) {
	return (Math.random() * (max - min) + min).toFixed(0)
}

const nibbleHigh = randomNumb(81, 97);
const nibbleMedium = randomNumb(61, 80);
const nibbleLow = randomNumb(45, 60);

const filterFish = () => {
    for(let i = 0; i < weekDay.length; i++) {
    if (weekDay[i].textContent === 'воскресенье') {
		percent[i].style.cssText = `stroke-dashoffset: calc(340px - (340px * ${nibbleHigh}) / 100); stroke: #6BAE37;`
		percentNum[i].textContent = `${nibbleHigh}%`
        percent[i + 6].style.cssText = `stroke-dashoffset: calc(340px - (340px * ${randomNumb(81, 97)}) / 100); stroke: #6BAE37;`
		percentNum[i + 6].textContent = `${randomNumb(81, 97)}%`
	}

	else if (weekDay[i].textContent === 'вторник') {
		percent[i].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${nibbleMedium}) / 100); stroke: #F3CD44;`
		percentNum[i].textContent = `${nibbleMedium}%`
        percent[i + 6].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${randomNumb(62, 79)}) / 100); stroke: #F3CD44;`
		percentNum[i + 6].textContent = `${randomNumb(62, 79)}%`
	}

	else if (weekDay[i].textContent === 'понедельник') {
		percent[i].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${nibbleLow}) / 100); stroke: #F19450;`
		percentNum[i].textContent = `${nibbleLow}%`
        percent[i + 6].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${randomNumb(60, 80)}) / 100); stroke: #F19450;`
		percentNum[i + 6].textContent = `${randomNumb(60, 80)}%`
	}
    else if (weekDay[i].textContent === 'среда') {
		percent[i].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${nibbleLow}) / 100); stroke: #F19450;`
		percentNum[i].textContent = `${nibbleLow}%`
        percent[i + 6].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${nibbleLow}) / 100); stroke: #F19450;`
		percentNum[i + 6].textContent = `${nibbleLow}%`
	}
    else if (weekDay[i].textContent === 'четверг') {
		percent[i].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${nibbleLow}) / 100); stroke: #F19450;`
		percentNum[i].textContent = `${nibbleLow}%`
        percent[i + 6].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${nibbleLow}) / 100); stroke: #F19450;`
		percentNum[i + 6].textContent = `${nibbleLow}%`
	}
    else if (weekDay[i].textContent === 'пятница') {
		percent[i].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${randomNumb(81, 97)}) / 100); stroke: #F19450;`
		percentNum[i].textContent = `${randomNumb(81, 97)}%`
        percent[i + 6].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${randomNumb(81, 97)}) / 100); stroke: #F19450;`
		percentNum[i + 6].textContent = `${randomNumb(81, 97)}%`
	}
    else if (weekDay[i].textContent === 'суббота') {
		percent[i].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${randomNumb(81, 97)}) / 100); stroke: #F19450;`
		percentNum[i].textContent = `${randomNumb(81, 97)}%`
        percent[i + 6].style.cssText = `stroke-dashoffset: calc(210px - (210px * ${randomNumb(81, 97)}) / 100); stroke: #F19450;`
		percentNum[i + 6].textContent = `${randomNumb(81, 97)}%`
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
}
