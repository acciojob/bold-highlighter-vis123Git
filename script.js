function highlight() {
	let all_text = document.getElementsByTagName("strong")
		for (let text of all_text) {
			text.style.color = "green"; 
		}
}


function return_normal() {
	function highlight() {
	let all_text = document.getElementsByTagName("strong")
		for (let text of all_text) {
			text.style.removeProperty('color');
		}
    
}
