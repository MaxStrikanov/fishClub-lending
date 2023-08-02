// import checkingСertificate  from '../components/xlsx.js';
// import toggleMenu from '../components/menu.js';
// import slider from '../components/slider.js'


// document.addEventListener('load' , checkingСertificate())
// toggleMenu();
// slider();

const dataCurrent = document.querySelectorAll('.fish-cards-data__day')
const weekDay = document.querySelectorAll('.week-day');
const dataWeek = document.querySelectorAll('.fish-cards-data__week')
const weekdays = [
		'воскресенье',
		'понедельник',
		'вторник',
		'среда',
		'четверг',
		'пятница',
		'суббота'
	]

function GetDates() {
    const aryDates = [];
    for (let i = 0; i <= 6; i++) {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - i);
        aryDates.push(currentDate.toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'numeric',
}));
    }
    return aryDates;
}

const aryDates = GetDates();

dataWeek.forEach((item, i) => {
	const aryDates = [];
    for (let i = 0; i <= 6; i++) {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - i);
        aryDates.push(currentDate.toLocaleString('ru-RU', {
	weekday: 'long',
	}));
}
	item.textContent = aryDates[i]
})

dataCurrent.forEach((item, i) => {
	
    item.textContent = aryDates[i]
})


const swiper = new Swiper('.swiper', {
	slidesPerView: 3,
	navigation: {
		nextEl: '.events-btn_next',
		prevEl: '.events-btn_prev',
	},
	breakpoints: {
    // when window width is >= 320px
    320: {
		slidesPerView: 1,
	}, 
	1000: {
	slidesPerView: 3,
	},      
	}
});