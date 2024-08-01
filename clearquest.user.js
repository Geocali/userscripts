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
            // let xpath = '/html/body/div[1]/div/div[4]/div/div[3]/div/div[1]/form/div/div/div/input';
            // let result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            // let element = result.singleNodeValue;

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