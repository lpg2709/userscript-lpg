// ==UserScript==
// @name         Remove Side ADDs - hltv.org
// @description  Remove side adds from HTTV.org
// @version      1.0
// @author       lpg2709
// @match        https://www.hltv.org/*
// @icon         https://www.hltv.org/img/static/favicon/apple-touch-icon.png
// @grant        none
// @homepage     https://github.com/lpg2709/userscript-lpg
// ==/UserScript==

var interval = setInterval(function() {
  var body = document.querySelector("body");
  if (body != null) {
    body.style = "";
    clearInterval(interval);
  }
}, 100);
