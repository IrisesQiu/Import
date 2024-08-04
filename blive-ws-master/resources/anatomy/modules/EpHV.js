/**
 * id: EpHV
 * path: ./core
 */

(function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Tracker=void 0;var t=require("./formatter"),e=require("./utils");function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}var r,a,c,s,f,u,l,h,d,v,w=function(t,e,n,i){return new(n||(n=Promise))(function(o,r){function a(t){try{s(i.next(t))}catch(e){r(e)}}function c(t){try{s(i.throw(t))}catch(e){r(e)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(a,c)}s((i=i.apply(t,e||[])).next())})},p=function(t,e,n,i,o){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?o.call(t,n):o?o.value=n:e.set(t,n),n},m=function(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)},b=new Promise(function(t){""===(0,e.getCookie)("buvid3")?window.fetch("//data.bilibili.com/v/",{credentials:"include"}).then(function(){return t()}).catch(function(){return t()}):t()});function y(t){var n,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return w(this,void 0,void 0,regeneratorRuntime.mark(function r(){var a,c;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(0!==t.length){r.next=2;break}return r.abrupt("return");case 2:if(a="string"==typeof t?t:t.join(""),c="//data.bilibili.com/gol/postweb",!i){r.next=8;break}null===(n=navigator.sendBeacon)||void 0===n||n.call(navigator,c,a),r.next=11;break;case 8:return r.next=10,b;case 10:fetch(c,{method:"POST",body:a,credentials:"include"}).then(function(n){if(429===n.status){var i=[1e4,2e4,4e4][o];if(null==i)return;window.setTimeout(function(){y(t,!1,o+=1).catch(e.noop)},i)}}).catch(function(t){console.error(t)});case 11:case"end":return r.stop()}},r)}))}var g=!1,k=0;window.addEventListener("beforeunload",function(){g=!0,clearTimeout(k),k=window.setTimeout(function(){g=!1},5e3)});var T=function(){function i(o){var w,b,g=this,k=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n(this,i),r.set(this,[]),a.set(this,void 0),c.set(this,void 0),s.set(this,function(){}),f.set(this,void 0),u.set(this,[]),l.set(this,(b=!1,function(){if(!b){b=!0;var t=window.setTimeout(function(){b=!1,m(g,d,"f").call(g)},6e4);p(g,s,function(){b=!1,clearTimeout(t)},"f")}})),h.set(this,function(t,n){var i=Math.random()*n,o=window.setTimeout(function(){p(g,u,m(g,u,"f").filter(function(t){return t.timer!==o}),"f"),y(t,i<10,0).catch(e.noop)},i),r={timer:o,data:t};m(g,u,"f").push(r)}),d.set(this,function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];m(g,s,"f").call(g),y(m(g,r,"f"),t).catch(e.noop),p(g,r,[],"f")}),v.set(this,function(){"hidden"===document.visibilityState&&(m(g,u,"f").forEach(function(t){var e=t.timer;return clearTimeout(e)}),y(m(g,u,"f").map(function(t){return t.data}),!0).catch(e.noop),p(g,u,[],"f"),m(g,d,"f").call(g,!0))}),p(this,a,o,"f"),p(this,f,null!==(w=k.formatter)&&void 0!==w?w:t.Formatter[o],"f"),null==m(this,f,"f"))throw new Error("Undefined Formatter for logId: ".concat(o));p(this,c,k,"f"),document.addEventListener("visibilitychange",m(this,v,"f"))}return o(i,[{key:"event",value:function(t,n){var i,o,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"!=typeof t||""===t)throw Error("evtId: ".concat(JSON.stringify(t)," not a string"));var u=null!==(o=null!==(i=s.sample)&&void 0!==i?i:m(this,c,"f").sample)&&void 0!==o?o:100,v=100*Math.random()>=u;if(!0===m(this,c,"f").debug&&console.log("live-web-track: evtId: ".concat(t,", 采样率 ").concat(u,"%, 本次是否上报 ").concat(JSON.stringify(!v))),!v){var w="".concat(m(this,a,"f")).concat(Date.now()).concat(m(this,f,"f").call(this,Object.assign({evtId:t,data:n},m(this,c,"f"))).join("|"));if(g)y(w,!0).catch(e.noop);else{if("number"==typeof s.randDelay)return void m(this,h,"f").call(this,w,s.randDelay);(0,e.isMobile)()?y(w,!0).catch(e.noop):m(this,r,"f").push(w)}m(this,r,"f").length>=10?m(this,d,"f").call(this):m(this,l,"f").call(this)}}},{key:"set",value:function(t){p(this,c,Object.assign({},m(this,c,"f"),t),"f")}},{key:"destroy",value:function(){m(this,d,"f").call(this),document.removeEventListener("visibilitychange",m(this,v,"f"))}}]),i}();exports.Tracker=T,r=new WeakMap,a=new WeakMap,c=new WeakMap,s=new WeakMap,f=new WeakMap,u=new WeakMap,l=new WeakMap,h=new WeakMap,d=new WeakMap,v=new WeakMap;
})()