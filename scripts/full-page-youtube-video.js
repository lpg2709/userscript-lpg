// ==UserScript==
// @name         Full page video
// @version      1.0
// @description  Create a page with a full video
// @author       lpg2709
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';
	console.log("**************************\n* %cVIDEO_FULL 1.0 WORKIN! %c*\n**************************\nHow use: %conly into youtube videos page\n %cvideo_full%c();\n", "color: #fd971f", "color: #000", "color: #f92672", "color: #66d9ef", "color: #000");
	window.video_full = function () {
		if (document.getElementById("search-form")) {
			console.log("Iniciando Script");
			var html = document.getElementsByTagName("html");
			console.log("Pegando ID");
			var video_id = ((document.URL).split("v=")[1]).split("&")[0];
			console.log(video_id)
			var videoTitle = document.querySelector('yt-formatted-string[class="style-scope ytd-video-primary-info-renderer"]').innerText;
			console.log("Gerenando pagina");
			var iframe = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>${videoTitle}</title></head><style type="text/css">*{padding: 0;margin: 0;box-sizing: border-box;}body, html{background-color: #000;}#yt_video{width: 100vw;height: calc(100vh - 4px);}</style><body><iframe id="yt_video" src="https://www.youtube.com/embed/${video_id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></body></html>`
			console.log("Abrindo pagina");
			var myWindow = window.open("/", "_blank");
			myWindow.document.write(iframe);
		} else {
			console.error("Invalido!");
		}
	}
})();
