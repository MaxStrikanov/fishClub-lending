
import { calendaryFish } from './components/calendatyFish.js';

import startWidget from './components/widgetSevice.js'

const init = async (app) => {

	const widget = await startWidget();
	app.append(widget);
	await calendaryFish()
	
}

init(document.getElementById('app'))
