// ==UserScript==
// @name         Match on New Tab - hltv.org
// @description  Load the match video on new tab.
// @version      1.0
// @author       lpg2709
// @match        https://www.hltv.org/matches/*
// @icon         https://www.hltv.org/img/static/favicon/apple-touch-icon.png
// @grant        none
// @homepage     https://github.com/lpg2709/userscript-lpg
// ==/UserScript==
var search_timer = window.setInterval(function(){
  var matchs_videos = document.querySelectorAll("span.spoiler > div.stream-box");
  if(matchs_videos == undefined) return;

  var parent = matchs_videos[0].parentElement;
  console.log("Matchs videos founded ...");
  for(match of matchs_videos) {
    var newTabButton = document.createElement("a");
		newTabButton.classList.add("stream-box");
		newTabButton.textContent = `${match.firstChild.lastChild.innerText} on New Tab`;
    newTabButton.target = "_blank"
    newTabButton.href = match.getAttribute('data-stream-embed');

		parent.insertBefore(newTabButton, match.nextSibling);
  }
  
  clearInterval(search_timer);
}, 1000);
