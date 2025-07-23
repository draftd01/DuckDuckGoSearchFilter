function filterResults(){
	if (window.location.href.includes("duckduckgo.com")){
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
			msg.style.fontSize = "1.4rem"
			var results = resultList[0].parentElement
			results.insertBefore(msg, resultList[0])
		}
	} else if (window.location.href.includes("google.com/search")){
		var taw = document.getElementById("taw")
		var sponsoredContent = taw.querySelectorAll(".GUyUUb > div[class]")
		taw.style.height = "1px";
		taw.style.overflow = "hidden"
		var msg = document.createElement("div")
		msg.innerHTML = `Filtered ${sponsoredContent.length} results!`
		msg.style.background = "white"
		msg.style.padding = "0.5rem"
		msg.style.margin = "0.5rem"
		msg.style.fontSize = "1.4rem"
		msg.style.color = "black"
		taw.parentElement.insertBefore(msg, taw)
	}
}
window.addEventListener("load", () => {
	filterResults()
})

document.getElementById("taw").querySelectorAll(".GUyUUb > div:not([class])")