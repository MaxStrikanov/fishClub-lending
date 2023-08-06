const renderEvent = (data, title) => {
    const div = document.createElement('div')
    div.className = 'event-modal open'

    div.insertAdjacentHTML('beforeend', `
        <div class="event-modal-dialog " >
            <div class="event-modal-content">
                <div class="event-modal-header">
                    <div class="header-wrapper">
                        <h3 class="event-modal-title">${title}</h3>
                        <span class="event-modal-data">${data}</span>
                    </div>
                    <img src="img/close.svg" alt="" class="close" width="45px" height="45px">
                </div>
                <div class="event-modal-body">
                    <div class="event-modal-body__img">
                        <img src="img/news-1.png" alt="">
                    </div>
                    
                    <div class="event-modal-body__text">
                        Лишь предприниматели в сети интернет, вне зависимости от их уровня, должны быть объявлены нарушающими общечеловеческие нормы этики и морали. Также как существующая теория однозначно определяет каждого участника как способного принимать собственные решения касаемо системы обучения кадров, соответствующей насущным потребностям. Ясность нашей позиции очевидна: дальнейшее развитие различных форм деятельности.
                    </div>
                </div>
            </div>
        </div>
    `)

}



const modalClose = () => { 
    document.querySelectorAll('.close')[2].onclick = () => {
        document.querySelector('.event-modal').classList.toggle('open');
	}

    document.querySelector('.event-modal').classList.remove('open');

}


export const eventPopUp = () => {
    const events = document.querySelectorAll('.events-item');
    const eventsItemData = document.querySelectorAll('.events-item-data');
    const eventsItemTitle = document.querySelectorAll('.events-item-text');
    const eventModalTitle = document.querySelector('.event-modal-title')
    const eventModalData = document.querySelector('.event-modal-data')
    events.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            document.querySelector('.event-modal').classList.add('open');
            eventModalData.textContent = eventsItemData[i].textContent
            eventModalTitle.textContent = eventsItemTitle[i].textContent
        })
    })
    modalClose()
}
