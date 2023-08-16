// ==UserScript==
// @name         Title Scores - hltv.org
// @description  Shows live scores from HLTV match pages in the title bar.
// @version      2.2
// @author       lpg2709
// @match        https://www.hltv.org/matches/*
// @icon         https://www.hltv.org/img/static/favicon/apple-touch-icon.png
// @grant        none
// @homepage     https://github.com/lpg2709/userscript-lpg
// ==/UserScript==

function getMapWins(ctName, tName) {
	var mapholder = document.getElementsByClassName("mapholder");
	var ctWins = 0;
	var trWins = 0;
	for(let i = 0; i < mapholder.length; i++){
		var result = mapholder[i].querySelector(".results");
		var resultStatus = mapholder[i].querySelector(".results-stats");
		var mapFinished = resultStatus != null;
		if(mapFinished){
			var left = result.querySelector(".results-left");
			var right = result.querySelector(".results-right");

			var teamNameLeft = left.querySelector(".results-teamname").textContent;
			var teamNameRight = right.querySelector(".results-teamname").textContent;

			var leftClass = left.classList;
			var rightClass = right.classList;
			var leftWin = false;
			var rightWin = false;

			for(let i in leftClass){
				if(leftClass[i] == "won"){
					leftWin = true;
					break;
				}
			}
			if(!leftWin) {
				for(let i in rightClass){
					if(rightClass[i] == "won"){
						rightWin = true;
						break;
					}
				}
				if(rightWin){
					if(teamNameRight == tName)
						trWins++;
					if(teamNameRight == ctName)
						ctWins++;        
				}
			} else {
				if(teamNameLeft == ctName)
					ctWins++;
				if(teamNameLeft == tName)
					trWins++;
			}
		}
	}

	return [ctWins, trWins];
}

window.getMapWins = getMapWins;

window.setInterval(function(){
	var ctScore = document.getElementsByClassName("ctScore")[0];
	if(ctScore == undefined) return;
	var tScore = document.getElementsByClassName("tScore")[0];

	var ctName = document.getElementsByClassName("ctTeamHeaderBg")[0].childNodes[0].childNodes[0].textContent.trim();
	var tName = document.getElementsByClassName("tTeamHeaderBg")[0].childNodes[0].childNodes[0].textContent.trim();

	var [ctWins, trWins] = getMapWins(ctName, tName);

	document.title =  `(${ctWins}) `+ ctName.toUpperCase().substring(0,4) + " " + ctScore.innerHTML + ":"
		+ tScore.innerHTML + " " + tName.toUpperCase().substring(0,4) + ` (${trWins})`;
}, 5000);
