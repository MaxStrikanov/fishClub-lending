
export const calendaryFish = async () => {
    const percent = document.querySelectorAll('.percent svg circle:last-child');
    const percentNum = document.querySelectorAll('.percent-num')
	
	const filterFish =  () => {
		for(let i = 0; i < percent.length; i++) {
			let nibble = percentNum[i].textContent.slice(0, -1)
			let total = 188 - (188 * +nibble) / 100
		if (nibble > 80) {
			percent[i].style.cssText = `stroke-dashoffset: ${total}; stroke: #6BAE37;`	
		}
		else if (65 < nibble < 80) {
			percent[i].style.cssText = `stroke-dashoffset:${total}; stroke: #F19450;`	
		}
		if ( nibble < 65) {
			percent[i].style.cssText = `stroke-dashoffset: ${total}; stroke: #F3CD44;`	
		}
	}}
	filterFish()
}
