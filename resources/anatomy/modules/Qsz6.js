/**
 * id: Qsz6
 * path: ./video-enhance
 */

(function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.startVideoCAS=void 0;var e=require("@bilibili-live/web-player"),t=require("./cas");function i(i){var r=function(){},n=0,o=0,a=function(){var e=i.getVideoEl();if(null!=e){n=e.videoWidth,o=e.videoHeight;var a=(0,t.videoCAS)(e),v=a.canvas,d=a.supported,l=a.stop;d&&(r(),r=l,i.container.appendChild(v))}};a();var v=i.on(e.VideoEventType.FirstFrame,function(){r(),a()}),d=i.on(e.VideoEventType.Ended,r),l=i.on(e.VideoEventType.Error,r),c=i.on(e.LivePlayerEvent.Destroyed,r),s=0,u=i.on(e.VideoEventType.MetaData,function(){var e=0;clearInterval(s),s=window.setInterval(function(){if(e>15)clearInterval(s);else{e+=1;var t=i.getVideoEl();null!=t&&(t.videoWidth===n&&t.videoHeight===o||(clearInterval(s),r(),a()))}},1e3)});return function(){clearInterval(s),r(),v(),c(),u(),d(),l()}}exports.startVideoCAS=i;
})()