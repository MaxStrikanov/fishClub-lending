
import accordion from './components/accordion.js';
import { calendaryFish } from './components/calendatyFish.js';
import { modal } from './components/menu.js';
import parseExcel from './components/parseExcel.js';
import scroll from './components/scmoothScroll.js';
import { sendForm } from './components/sendForm.js';

import slider from './components/slider.js';

import startWidget from './components/widgetSevice.js'

const init = async (app) => {

	const widget = await startWidget();
	app.append(widget);
	await calendaryFish()
	await scroll()
	await parseExcel()
	slider();
	modal();
	await sendForm();
	accordion();
	
}

init(document.getElementById('app'))
