const newsReadmoreBtn = document.querySelectorAll('.news-readmore')
const newsText = document.querySelectorAll('.news-text ')

const accordion = () => {
    newsReadmoreBtn.forEach((item, i) => {
        item.onclick = () => {
            newsText[i].classList.toggle('open')
        }
    })
}

export default accordion;