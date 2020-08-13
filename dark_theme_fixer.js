// ==UserScript==
// @name         Dark theme fixer
// @version      0.1
// @description  Fix dark theme in sites
// @author       lpg2709
// @include      https://apphub.educacional.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    /* apphub.educacional.com */
    var hub_background = document.getElementsByClassName("background");
    hub_background[0].style = "filter: invert(85%)";

    // Your code here...
})();
