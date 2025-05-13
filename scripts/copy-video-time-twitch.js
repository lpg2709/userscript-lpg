// ==UserScript==
// @name         Copy Video Time - Twitch
// @description  Copy the current video time embed on URL.
// @version      1.0
// @author       lpg2709
// @match        https://player.twitch.tv/*
// @icon         https://cdn-icons-png.flaticon.com/128/3291/3291659.png
// @grant        none
// @homepage     https://github.com/lpg2709/userscript-lpg
// ==/UserScript==
var search_timer = window.setInterval(function(){
  var current_time = document.querySelector('[data-a-target="player-seekbar-current-time"]');
  if(current_time == undefined) return;
  console.log("Copy Video Time - Twitch: Started");
  var right_control_painel = document.querySelector('.player-controls__right-control-group');
  var copyButton = document.createElement("button");
  var currentUrl = "" + document.location;

  var message_view = document.createElement("div");
  message_view.style = `
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    background: #9147ff;
    color: white;
    border-radius: 5px;
    padding: 5px;
    margin: 10px 10px 10px 15px;
    cursor: default;
    z-index: 9999999;
    opacity: 1.0;`;

  copyButton.textContent = '📋';
  copyButton.style.with = "30px";
  copyButton.style.height = "30px";
  copyButton.title = "Copy current video time with URL";
  copyButton.addEventListener("click", () => {
    var currentTime = document.querySelector('[data-a-target="player-seekbar-current-time"]').textContent.split(":");
    var url = currentUrl.replace(/&t=([^&]+)/, `&t=${currentTime[0]}h${currentTime[1]}m${currentTime[2]}s`);

    navigator.clipboard.writeText(url).then(() => { message_view.textContent = "Copied to clipboard"; }, () => {
      console.log('Copy error !!!');
    });

    document.body.appendChild(message_view);
    setTimeout(() => {
      document.body.removeChild(message_view);
    }, 2000);

  });

  right_control_painel.insertBefore(copyButton, right_control_painel.firstChild);

  clearInterval(search_timer);
}, 5000);
