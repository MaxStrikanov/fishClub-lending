
import { calendaryFish } from './components/calendatyFish.js';
import parseExcel from './components/parseExcel.js';
import scroll from './components/scmoothScroll.js';
import slider from './components/slider.js';

import startWidget from './components/widgetSevice.js'

const init = async (app) => {

	const widget = await startWidget();
	app.append(widget);
	await calendaryFish()
	await scroll()
	await parseExcel()
	slider()
	
}

init(document.getElementById('app'))
