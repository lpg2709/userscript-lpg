// ==UserScript==
// @name         GruvBox Dark Theme
// @version      1.2
// @description  Gruvbox dark theme for DuckDuckGo.
// @author       lpg2709
// @namespace    https://duckduckgo.com/
// @match        https://duckduckgo.com/*
// @homepage     https://github.com/lpg2709/userscript-lpg
// @grant        none
// ==/UserScript==
const config = {
	// https://duckduckgo.com/params
	// https://duckduckgo.com/settings
	// https://github.com/morhetz/gruvbox
	
	// Page Appearance
	"ae": "t",         // Theme: Terminal
	"t": "p",          // Text font: Proxima Nova
	"s": "m",          // Size: Medium
	"w": "n",          // Width: Normal
	"m": "l",          // Placement: Left
	"7": "282828",     // Background: Gruvbox background

	// Header Appearance
	"o": "s",          // Header: On and scrolling
	"j": "282828",     // Header colour: Gruvbox background

	// Results Appearance
	"a": "p",          // Link font: Proxima Nova
	"9": "98971a",     // Link colour: Gruvbox green
	"aa": "b16286",    // Visited link colour: Gruvbox purple
	"u": "-1",         // Underline: Off

	"8": "ebdbb2",     // Text colour: Gruvbox foreground
	"x": "d79921",     // URL colour: Gruvbox yellow
	"y": "ff0000",     // Highlight colour: Gruvbox selection
	"af": "1",         // Full URLs: On
	"ai": "1",         // URL above: On

	"f": "1",          // Site icons: On
}
var gruvbox=[
  `7=${config["7"]}`, `8=${config["8"]}`,
  `9=${config["9"]}`, `ae=${config["ea"]}`,`t=${config["t"]}`,`s=${config["s"]}`,
  `w=${config["w"]}`, `m=${config["m"]}`, `o=${config["o"]}`, `j=${config["j"]}`,
  `a=${config["a"]}`, `aa=${config["aa"]}`, `u=${config["u"]}`,
  `x=${config["x"]}`, `y=${config["y"]}`,
  `af=${config["af"]}`, `ai=${config["ai"]}`, `f=${config["f"]}`];

for(var i=0;i<gruvbox.length;i++)
  document.cookie=gruvbox[i];
