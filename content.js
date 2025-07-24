var resultsHidden = true

var showResultsBtn = document.createElement("button")
showResultsBtn.type = "button"
showResultsBtn.style.height = "2.3rem"
showResultsBtn.style.position = "relative"
showResultsBtn.style.left = "50%"
showResultsBtn.style.transform = "translate(-50%)"
showResultsBtn.borderRadius = "1.4rem"
showResultsBtn.background = "dimgray"

function showResults(website){
	if(resultsHidden){
		if(website == "duckduckgo"){
			for (var elem of resultList){
				elem.style.height = "unset";
				elem.style.overflow = "unset"
				elem.style.margin = "revert-layer"
				elem.style.padding = "revert-layer"
			}
		} else if(website == "google"){
			var taw = document.getElementById("taw")
			taw.style.height = "unset"
			taw.style.overflow = "unset"
		}
		resultsHidden = false
	}else{
		if(website == "duckduckgo"){
			var resultList = document.querySelectorAll("ol [data-layout='ad']")
			if (resultList.length > 0) {
				for (var elem of resultList){
					elem.style.height = "1px";
					elem.style.overflow = "hidden"
					elem.style.margin = "0"
					elem.style.padding = "0"
				}
			}
		}else if(website == "google"){
			var taw = document.getElementById("taw")
			taw.style.height = "1px"
			taw.style.overflow = "hidden"
		}
		resultsHidden = true
	}	
}

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
			var filler = document.createElement("li")
			showResultsBtn.onclick = () => {showResults('duckduckgo')}
			var msg = `<svg fill="#000000" height="15" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 491.996 491.996" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848 L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128 c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084 c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224 C491.996,136.902,489.204,130.046,484.132,124.986z"></path> </g> </g> </g></svg>
						Show ${resultList.length} hidden results`
			showResultsBtn.innerHTML = msg
			filler.innerHTML = showResultsBtn
			//msg.style.background = "white"
			filler.style.padding = "0.5rem"
			filler.style.margin = "0.5rem"
			filler.style.fontSize = "1.4rem"
			var results = resultList[0].parentElement
			results.insertBefore(filler, resultList[0])
		}
	} else if (window.location.href.includes("google.com/search")){
		var sponsoredContent = taw.querySelectorAll(".GUyUUb > div[class]")
		if(sponsoredContent.length > 0){
			var taw = document.getElementById("taw")		
			taw.style.height = "1px"
			taw.style.overflow = "hidden"
			var filler = document.createElement("div")
			showResultsBtn.onclick = () => {showResults('google')}
			var msg = `<svg fill="#000000" height="15" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 491.996 491.996" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848 L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128 c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084 c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224 C491.996,136.902,489.204,130.046,484.132,124.986z"></path> </g> </g> </g></svg>
						Show ${sponsoredContent.length} hidden results`
			showResultsBtn.innerHTML = msg
			filler.innerHTML = showResultsBtn
			//msg.style.background = "white"
			filler.style.padding = "0.5rem"
			filler.style.margin = "0.5rem"
			filler.style.fontSize = "1.4rem"
			filler.style.color = "black"
			taw.parentElement.insertBefore(filler, taw)
		}
	}
}
window.addEventListener("load", () => {
	filterResults()
})
