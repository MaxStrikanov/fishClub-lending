
import { calendaryFish } from './components/calendatyFish.js';
import scroll from './components/scmoothScroll.js';

import startWidget from './components/widgetSevice.js'

const init = async (app) => {

	const widget = await startWidget();
	app.append(widget);
	await calendaryFish()
	await scroll()
	
}

init(document.getElementById('app'))
