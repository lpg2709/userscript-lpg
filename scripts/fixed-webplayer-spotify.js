// ==UserScript==
// @name         Fixed webplayer Spotify
// @version      3.0
// @description  Put the player of webplayer Spotify fixed in the bottom, when window height is less then 590px
// @author       lpg2709
// @match        https://open.spotify.com/*
// @icon         https://open.spotifycdn.com/cdn/images/favicon16.1c487bff.png
// @grant        none
// ==/UserScript==

function fixedPlayer() {
	var a = document.querySelector(".Root__now-playing-bar");
	if(typeof(a) !== "undefined"){
		a.style.position = 'fixed';
		a.style.bottom = '0';
		a.style.backgroundColor = "#000"
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

