
const checkBox = document.querySelector('.modal-body form input[type="checkbox"]')

console.log(checkBox);

const btn = document.querySelector('#formSend button')



export const sendForm = async () => {

    checkBox.checked ? btn.removeAttribute('disabled ', 'disabled')  :  btn.setAttribute('disabled', 'disabled')
}


const applicantForm = document.getElementById('formSend')
applicantForm.addEventListener('submit', (e) => {
    e.preventDefault()

    

})


