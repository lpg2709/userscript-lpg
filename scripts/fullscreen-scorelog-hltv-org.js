// ==UserScript==
// @name         Center Scrore - hltv.org
// @description  Make the score log of some HLTV.org match full screen
// @version      1.1
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
			var scoreboard = document.querySelector(".scoreboard");
			var navbar = document.querySelector(".navbar");
			var scorebot = document.querySelector(".scorebot");
			var floatButtonMenu = document.querySelector(".leftColPullInButton");

			var styleFullScreen = document.createElement("style");
			styleFullScreen.textContent = `
		.s-fullScreen {
		  position: fixed;
		  z-index: 99999;
		  top: 0;
		  left: 0;
		  background-color: #1b1f23;
		  width: 100%;
		  height: 100%;
		}
		.s-fullwidth {
		  width: 100%;
		  max-width: 100% !important;
		}

		.s-not-show {
		  display: none !important;
		}

	  `;

			document.getElementsByTagName("html")[0].insertBefore(styleFullScreen, document.getElementsByTagName("head")[0]);

			var toggleButton = document.createElement("span");
			toggleButton.classList.add("pro-toggle")
			toggleButton.classList.add("active")
			toggleButton.textContent = "Fullscreen"

			toggleButton.addEventListener("click", () => {
				if(!isFull) {
					scorebot.classList.add("s-fullScreen");
					scoreboard.classList.add("s-fullwidth");
					navbar.classList.add("s-not-show");
					floatButtonMenu.classList.add("s-not-show");

					isFull = true;
				}else{
					scorebot.classList.remove("s-fullScreen");
					scoreboard.classList.remove("s-fullwidth");
					navbar.classList.remove("s-not-show");
					floatButtonMenu.classList.remove("s-not-show");
					isFull = false;
				}
			});
			menuscore.insertBefore(toggleButton, menuscore.firstChild);
			clearInterval(interval);
		}
	}, 1000);
};
