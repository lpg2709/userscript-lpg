// ==UserScript==
// @name         Fixed webplayer Spotify
// @version      2.0
// @description  Put the player of webplayer Spotify fixed in the bottom, when window height is less then 590px
// @match        https://open.spotify.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function () {
        var wH = window.innerHeight;
        if(wH < 590){
            var interval = setInterval(function(){
                var a = document.getElementsByClassName('Root__now-playing-bar')[0];
                if(typeof(a) !== "undefined"){
                    a.style.position = 'fixed';
                    a.style.bottom = '0';
                    clearInterval(interval);
                }
            }, 1000);
        }
    })
})();
