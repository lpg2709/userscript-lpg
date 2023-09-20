// ==UserScript==
// @name         Fixed webplayer Spotify
// @version      3.2
// @description  Put the player of webplayer Spotify fixed in the bottom.
// @author       lpg2709
// @match        https://open.spotify.com/*
// @icon         https://open.spotifycdn.com/cdn/images/favicon16.1c487bff.png
// @homepage     https://github.com/lpg2709/userscript-lpg
// @grant        none
// ==/UserScript==

function fixedPlayer() {
	var a = document.querySelector("footer");
	if(typeof(a) !== "undefined"){
		a.style.position = 'fixed';
		a.style.bottom = '0';
		a.style.backgroundColor = "#000";
		a.style.width = "100vw";
		return true;
	}
	return false;
}

(function() {
	'use strict';
	window.addEventListener('load', function () {
		if(window.innerHeight < 600){
			var interval = setInterval(function(){
				if(fixedPlayer()) {
					clearInterval(interval);
				}
			}, 1000);
		}
	});

	window.addEventListener("resize", (e) => {
		if(window.innerHeight < 600){
			fixedPlayer();
		}
	});
})();

