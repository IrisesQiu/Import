/**
 * id: JKnM
 * path: ./logger
 */

(function(require,module,exports) {
"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(t)}var t=this&&this.__assign||function(){return(t=Object.assign||function(n){for(var t,o=1,e=arguments.length;o<e;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Level=void 0;var o,e=require("./common");!function(n){n[n.Debug=0]="Debug",n[n.Info=1]="Info",n[n.Warn=2]="Warn",n[n.Error=3]="Error"}(o=exports.Level||(exports.Level={}));var r={printToConsole:!1,debug:f,info:s,warn:a,error:l,dump:y,history:p,watch:b,stringify:v,clear:g},c=[],i=new Set;function u(e,u){var f={content:"object"===n(e)?JSON.stringify(e,function(n,t){return t instanceof Error?t.toString():t}):e,level:u,ts:Date.now()};if(c.push(f),r.printToConsole){var s=o[u].toLowerCase();console[s](e)}setTimeout(function(){i.forEach(function(n){return n(t({},f))})},1)}function f(n){u(n,o.Debug)}function s(n){u(n,o.Info)}function a(n){u(n,o.Warn)}function l(n){e.wpd.Log2Console&&console.error(n),u(n,o.Error)}function p(){return c.slice(0)}function y(){return c.map(function(n){return v(n)}).join("\n")}function g(){c=[]}function b(n){return i.add(n),function(){i.delete(n)}}function v(n,t){var e=Object.assign({tag:!0,time:!0},t),r=new Date(n.ts),c="".concat(o[n.level]," "),i="".concat(r.getHours(),":").concat(r.getMinutes(),":").concat(r.getSeconds(),".").concat(r.getMilliseconds());return"".concat(e.tag?c:"").concat(e.time?i:"","> ").concat(n.content)}exports.default=r;
})()