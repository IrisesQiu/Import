/**
 * id: weyG
 * path: ./ui-components/preround-conuter
 */

(function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=require("@bilibili-live/web-player-common");function e(e,r,a){void 0===a&&(a=300),n.logger.info("start round count down");var i=e.getElementsByClassName("web-player-video-round-counter");1===i.length&&i[0].remove();var l=document.createElement("div");l.innerHTML='\n    <p style="'.concat(o(20),'">\n      <span>').concat(t(a),'</span>\n      后\n      </p>\n    <p style="').concat(o(30),'">主播的投稿视频将轮流播放</p>\n  '),l.classList.add("web-player-video-round-counter"),l.style.cssText="\n    width: 400px;\n    position: absolute;\n    z-index: 10;\n    pointer-events: none;\n    left: 50%;\n    top: 50%;\n    margin-left: -200px;\n    margin-top: -66px;\n    color: #aaa;\n  ";var c=l.getElementsByTagName("span");c[0].style.fontSize="50px",e.append(l);var s=window.setInterval(function(){a>1?c[0].innerText=t(--a):(clearInterval(s),l.remove(),r().catch(function(e){n.logger.error(e)}))},1e3);return function(){clearInterval(s),l.remove()}}function t(n){var e=Math.floor(n/60),t=Math.floor(n%60);return"0".concat(e,":").concat(t<10?"0"+t.toString():t)}function o(n){return"\n    text-align: center;\n    line-height: 50px;\n    letter-spacing: 3px;\n    font-weight: normal;\n    font-size: ".concat(n,"px;\n    line-height: 1;\n  ")}exports.default=e;
})()