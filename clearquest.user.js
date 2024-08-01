// ==UserScript==
// @name         Clearquest shortcuts
// @namespace    http://tampermonkey.net/
// @version      2024-08-01
// @description  try to take over the world!
// @author       You
// @match        https://clearquest.alstom.com/cqweb/
// @icon         https://clearquest.alstom.com/cqweb/stylesheets/prodicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.shiftKey && event.key === 'F') {

            console.log('Keypress detected');

            var element = document.querySelector('#cqFindRecordString');

            if (element) {
                console.log('Element found');
                element.focus();
                element.click();
            } else {
                console.log('Element not found');
            }
        }
    });
})();