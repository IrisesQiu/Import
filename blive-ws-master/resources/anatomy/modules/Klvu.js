/**
 * id: Klvu
 * path: ./loading
 */

(function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.unloading=exports.loading=void 0;var e='\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(0, 0, 0, 0.5); border-radius: 10px; display: block; shape-rendering: auto;" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n<g transform="rotate(0 50 50)">\n  <rect x="47" y="19" rx="3" ry="6" width="6" height="12" fill="#ffffff">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8888888888888888s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(40 50 50)">\n  <rect x="47" y="19" rx="3" ry="6" width="6" height="12" fill="#ffffff">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.7777777777777778s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(80 50 50)">\n  <rect x="47" y="19" rx="3" ry="6" width="6" height="12" fill="#ffffff">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(120 50 50)">\n  <rect x="47" y="19" rx="3" ry="6" width="6" height="12" fill="#ffffff">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5555555555555556s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(160 50 50)">\n  <rect x="47" y="19" rx="3" ry="6" width="6" height="12" fill="#ffffff">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4444444444444444s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(200 50 50)">\n  <rect x="47" y="19" rx="3" ry="6" width="6" height="12" fill="#ffffff">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(240 50 50)">\n  <rect x="47" y="19" rx="3" ry="6" width="6" height="12" fill="#ffffff">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.2222222222222222s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(280 50 50)">\n  <rect x="47" y="19" rx="3" ry="6" width="6" height="12" fill="#ffffff">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.1111111111111111s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(320 50 50)">\n  <rect x="47" y="19" rx="3" ry="6" width="6" height="12" fill="#ffffff">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>\n  </rect>\n</g>\n</svg>\n';function t(t){t.querySelectorAll(".web-player-loading").forEach(function(e){return e.remove()});var n=document.createElement("div");n.classList.add("web-player-loading"),n.innerHTML=e,n.style.cssText="\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 10;\n    display: none;\n    pointer-events: none;\n  ",t.appendChild(n);var i=setTimeout(function(){n.style.display="flex"},500);return function(){clearTimeout(i),n.remove()}}function n(){document.querySelectorAll(".web-player-loading").forEach(function(e){return e.remove()})}exports.loading=t,exports.unloading=n;
})()