// ==UserScript==
// @name         Request
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match      *://*/*
// @grant        none
// ==/UserScript==

var teste = 'aaa';

(function () {
    'use strict';
    window.request = function (method, url, data) {
        return new Promise(function (resolve, reject) {
            var req = new XMLHttpRequest();
            req.responseType = 'json';
            req.open(method, url, true);
            req.onreadystatechange = function () {
                if (req.readyState == XMLHttpRequest.DONE) {
                    console.log(JSON.stringify(req.response));
                }
            }
            if (method == 'POST') {
                req.send(data);
            } else {
                req.send(null);
            }
        });
    };
    console.log(`request v1.0 working!\nHow use:\n%c request%c(%cmethod%c, %curl%c, %cdata%c);\nWhere: \n %cmethod%c: %cPOST %cor %cGET \n %curl%c: %chttp %cor %chttps\n %cdata%c: request body, only for %cPOST`, 'color: #66d9ef;', 'color: #000;', 'color: #fd971f;', 'color: #000;', 'color: #fd971f;', 'color: #000;', 'color: #fd971f;', 'color: #000;', 'color: #fd971f;', 'color: #000;', 'color: #a6e22e;', 'color: #000;', 'color: #a6e22e;', 'color: #fd971f;', 'color: #000;', 'color: #a6e22e;', 'color: #000;', 'color: #a6e22e;', 'color: #fd971f;', 'color: #000;', 'color: #a6e22e;');
})();