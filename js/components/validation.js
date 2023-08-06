import { modalClose, popupOpen } from './menu.js';

const inputs = document.querySelectorAll('#formSend input[type = "text"]');
const btn = document.querySelector('#formSend button')
const checkBox = document.querySelector('.modal-body form input[type="checkbox"]')


export const validation = () => {
    inputs.forEach(item => {
    item.addEventListener('input',() => {
        if (item.value == "" && checkBox.checked){
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }
        })

    })

	btn.onclick = () => {
	let hasError = false;

	inputs.forEach((item) => {
		if (!item.value) {
			item.style.borderBottom = '1px solid red';
			hasError = true
		} else {
			item.style.borderBottom = '1px solid var(--main-colors-light-text)';
		}
	})
	if (!hasError) {
		inputs.forEach((item) => {
			item.value = ''  
            modalClose()
            window.setTimeout(popupOpen(), 5000)
		})
		}
	}
}
