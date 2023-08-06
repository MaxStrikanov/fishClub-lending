

export const modalOpen = () => {
	document.querySelector('.btn-phone').onclick = () => {
		document.getElementById('openModal').classList.toggle('open');
	}

	document.getElementById('openModal').onclick = (e) => {
		if(!e.target.closest('.modal-content') || e.target.closest('.close')) {
			document.getElementById('openModal').classList.toggle('open');
		}
	}
}

export const popupOpen = () => {
	
	document.getElementById('openpopup').classList.toggle('open');
	document.getElementById('openpopup').onclick = (e) => {

		if(e.target.closest('.close')) {
			document.getElementById('openpopup').classList.toggle('open');
		}
	}
}

export const modalClose = () => {document.getElementById('openModal').classList.remove('open');}



const toggleMenu = () => {
	const menuToggle = document.querySelector('.menu-toggle input ');
	const menuItems = document.querySelector('.menu-items');

	menuToggle.addEventListener('click', () => {
	menuItems.classList.toggle('open');
	});
}

export default toggleMenu;



