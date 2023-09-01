// ==UserScript==
// @name         Title Scores - hltv.org
// @description  Shows live scores from HLTV match pages in the title bar.
// @version      3.0
// @author       lpg2709
// @match        https://www.hltv.org/matches/*
// @icon         https://www.hltv.org/img/static/favicon/apple-touch-icon.png
// @grant        none
// @homepage     https://github.com/lpg2709/userscript-lpg
// ==/UserScript==

if (!("Notification" in window)) {
	var localOfPermissionButton = document.querySelector(".FPdoLc > center:nth-child(1)");
} else {
	if(Notification.permission != "granted") {
		var match_pages = document.querySelector(".match-page");
		var element_aftet = document.querySelector(".teamsBox");

		var permission_button = document.createElement("button");
		permission_button.textContent = "Liberar notificações";
		permission_button.style = "width: 100%;margin-top: 5px;background-color: #2d3844;color: white;border: none;font-weight: 800;font-size: 1.5rem;cursor: pointer";
		permission_button.addEventListener("click",onEnableNotify);

		element_aftet.parentElement.insertBefore(permission_button, element_aftet.nextSibling);

		function onEnableNotify(e){
			e.preventDefault();
			Notification.requestPermission(()=>{
				if(Notification.permission == "granted")
					match_pages.removeChild(permission_button);
			});
		}
	}
}

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

var prev_ctScore = "0";
var prev_trScore = "0";

window.setInterval(function(){
	var ctScore = document.getElementsByClassName("ctScore")[0];
	if(ctScore == undefined) return;
	var tScore = document.getElementsByClassName("tScore")[0];

	var ctName = document.getElementsByClassName("ctTeamHeaderBg")[0].childNodes[0].childNodes[0].textContent.trim();
	var tName = document.getElementsByClassName("tTeamHeaderBg")[0].childNodes[0].childNodes[0].textContent.trim();

	var [ctWins, trWins] = getMapWins(ctName, tName);

	var title = `(${ctWins}) `+ ctName.toUpperCase().substring(0,4) + " " + ctScore.innerHTML + ":"
		+ tScore.innerHTML + " " + tName.toUpperCase().substring(0,4) + ` (${trWins})`;
	document.title = title

	if(Notification.permission == "granted") {
		var update = false;
		if(prev_ctScore != ctScore.innerHTML) {
			prev_ctScore = ctScore.innerHTML;
			update = true;
		}
		if(prev_trScore != tScore.innerHTML) {
			prev_trScore = tScore.innerHTML;
			update = true;
		}

		if(update) {
			var n = new Notification(title);
			setInterval(() => { n.close() }, 2000);
		}
	}
}, 5000);
