// ==UserScript==
// @name         Title Scores - hltv.org
// @description  Shows live scores from HLTV match pages in the title bar.
// @version      1.0
// @author       lpg2709
// @match        https://www.hltv.org/matches/*
// @icon         https://www.hltv.org/img/static/favicon/apple-touch-icon.png
// @grant        none
// @homepage     https://github.com/lpg2709/userscript-lpg
// ==/UserScript==

window.setInterval(function(){
  var ctScore = document.getElementsByClassName("ctScore")[0];
  var tScore = document.getElementsByClassName("tScore")[0];

  var ctName = document.getElementsByClassName("ctTeamHeaderBg")[0].childNodes[0].childNodes[0];
  var tName = document.getElementsByClassName("tTeamHeaderBg")[0].childNodes[0].childNodes[0];

  document.title = ctName.textContent.toUpperCase().substring(0,4) + " " + ctScore.innerHTML + ":"
    + tScore.innerHTML + " " + tName.textContent.toUpperCase().substring(0,4);

}, 5000);
