// ==UserScript==
// @name         Fixed webplayer Spotify
// @version      1.0
// @description  Put the player of webplayer Spotify fixed in the bottom
// @match        https://open.spotify.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.fixedPlayer = function() {
        var a = document.getElementsByClassName('Root__now-playing-bar')[0];
        a.style.position = 'fixed';
        a.style.bottom = '0';
    }

    // Your code here...
})();
