// ==UserScript==
// @name         Video Speed Control Script
// @description  Controls any HTML5 video playback speed by pressing shortcut keys
// @version      1.0
// @author       lpg2709
// @include      *
// @icon         https://lh3.googleusercontent.com/5yY1QQ__b0c2ZLmmi6mcdjX-9V3LAgXhgUaZtsICFTjeQV0S6xkVncmV99oEtU-H8WN8dZpWh_cycXSXoyffADsoYg=w128-h128-e365-rj-sc0x00ffffff
// @grant        none
// @homepage     https://github.com/lpg2709/userscript-lpg
// ==/UserScript==


let video;
let speed = 1.0;

let speed_view = document.createElement("div");
speed_view.textContent = speed.toFixed(2);
speed_view.style = `
  position: absolute;
  top: 0;left: 0;
  background: black;
  color: white;
  border-radius: 5px;
  padding: 5px;
  margin: 10px 10px 10px 15px;
  cursor: default;
  z-index: 9999999;
  opacity: 0.1;`;

document.addEventListener("playing", registerShortcutKeys, { capture: true, once: true });
document.addEventListener("playing", restoreSpeed, { capture: true });
document.addEventListener("play", captureActiveVideoElement, true);

function registerShortcutKeys(event) {
  captureActiveVideoElement(event);
  document.addEventListener("keydown", handlePressedKey);
}

function restoreSpeed(event) {
  if (event.target.playbackRate !== speed) event.target.playbackRate = speed;
}

function captureActiveVideoElement(event) {
  video = event.target;
  video.parentElement.insertBefore(speed_view, video.parentElement.firstChild);
  video.addEventListener("mouseover", videoMouseHover);
  video.addEventListener("mouseout", videoMouseHoverout);
  speed = video.playbackRate;
}

function videoMouseHover(event) {
  speed_view.style.opacity = 1.0;
}

function videoMouseHoverout(event) {
  speed_view.style.opacity = 0.1;
}


function handlePressedKey(event) {
  if (event.target.localName === "input" || event.target.localName === "textarea" || event.target.isContentEditable) return;

  switch(event.key) {
    case 's':
      video.playbackRate -= 0.1;
      break;
    case 'd':
      video.playbackRate += 0.1;
      break;
    case 'z':
      video.currentTime += 5;
      break;
    case 'x':
      video.currentTime += 5;
      break;
    case 'r':
      video.playbackRate = 1;
      break;
    case 'g':
      video.playbackRate = 1.75;
      break;
    case 'h':
      video.playbackRate = 3;
      break;
  }

  speed = video.playbackRate;
  speed_view.textContent = speed.toFixed(2);
}
