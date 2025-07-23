function filterResults(){
	var resultList = document.querySelectorAll("ol [data-layout='ad']")
	if (resultList.length > 0) {
		for (var elem of resultList){
			elem.style.height = "1px";
			elem.style.overflow = "hidden"
			elem.style.margin = "0"
			elem.style.padding = "0"
		}
		var msg = document.createElement("li")
		msg.innerHTML = `Filtered ${resultList.length} results!`
		msg.style.background = "white"
		msg.style.padding = "0.5rem"
		msg.style.margin = "0.5rem"
		msg.fontSize = "1.4rem"
		var results = resultList[0].parentElement
		results.insertBefore(msg, resultList[0])
	}
}
window.addEventListener("load", () => {
	filterResults()
})