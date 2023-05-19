// ==UserScript==
// @name         Center Scrore - hltv.org
// @description  Make the score log of some HLTV.org match full screen
// @version      1.0
// @author       lpg2709
// @match        https://www.hltv.org/matches/*
// @icon         https://www.hltv.org/img/static/favicon/apple-touch-icon.png
// @grant        none
// @homepage     https://github.com/lpg2709/userscript-lpg
// ==/UserScript==

var isFull = false;

window.addEventListener('load', main);

function main(){
	var interval = setInterval(function(){
		var menuscore = document.querySelector(".pro-toggle-holder");

		if(menuscore) {
			var scorebot = document.querySelector(".scorebot");

			var toggleButton = document.createElement("span");
			toggleButton.classList.add("pro-toggle")
			toggleButton.classList.add("active")
			toggleButton.textContent = "Fullscreen"

			toggleButton.addEventListener("click", () => {
				scorebot.style.position = "fixed";
				scorebot.style.top	= "0";
				scorebot.style["z-index"] = "99999";
				scorebot.style.left = "0";
				scorebot.style["background-color"] = "#1b1f23";
				scorebot.style.width = "100vw";
				scorebot.style.height = "100vh";
				isFull = true;
			})
			menuscore.insertBefore(toggleButton, menuscore.firstChild);
			clearInterval(interval);
		}
	}, 1000);
};
