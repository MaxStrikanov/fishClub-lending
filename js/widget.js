
import { calendaryFish } from './component/calendatyFish.js';
import startWidget from './component/widgetSevice.js'

const init = async (app) => {

	const widget = await startWidget();
	app.append(widget);
	await calendaryFish()
	
}

init(document.getElementById('app'))
