import startWidget from './widgetSevice.js';

export const cityServiceSearch = (widget) => {
	const btn = document.querySelector('.widget__change-city');

	btn.addEventListener('click', () => {
		const form = document.createElement('form');
		form.classList.add('widget__form');

		const input = document.createElement('input');
		input.classList.add('widget__input');
		input.name = 'city';
		input.type = 'search';
		input.placeholder = 'Введите город';

		form.append(input);
		widget.append(form)

		input.focus()

		form.addEventListener('submit', async (e) => {
			e.preventDefault();

			widget.textContent = '';
			await startWidget(input.value, widget);
			cityServiceSearch(widget)
		})
	})
}