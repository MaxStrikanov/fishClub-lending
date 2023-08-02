const slider = () => {
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
}

export default slider