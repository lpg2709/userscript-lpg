// ==UserScript==
// @name         instagram-images-in-tabs
// @version      0.1
// @description  Open all uploaded images on the instagram page in tab
// @author       lpg2709
// @match        https://www.instagram.com/
// @icon         https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	window.tabIImages = function(){
		var images = document.querySelectorAll("img[sizes]");

		for(let i in images) {
			var a = document.createElement('a')
			a.href = images[i].src
			a.style.display = "none";
			a.target = "_blank"
			var body = document.querySelector('body');
			body.appendChild(a);
			if(images[i].src.match(/instagram.com/g) != null){
				a.click();
			}
		}
	}
})();
