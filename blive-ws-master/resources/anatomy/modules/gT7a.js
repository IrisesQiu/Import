/**
 * id: gT7a
 * path: ./ajax
 */

(function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(a,r){function i(t){try{c(o.next(t))}catch(e){r(e)}}function s(t){try{c(o.throw(t))}catch(e){r(e)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(i,s)}c((o=o.apply(t,e||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ajax=void 0;const e=require("./utils"),n="//api.live.bilibili.com",o=new Map;function a(a,r){return t(this,void 0,void 0,function*(){let t=a;/^(https?:)?\/\//.test(a)||(t=`${n}/${a.replace(/^\//,"")}`);const i=new URL(t,location.href),s=o.get(i.host+i.pathname);if(null!=s&&s.expiresTime>performance.now()){const t=Math.random()*s.scope;yield(0,e.sleep)(t)}const c=(0,e.getCookie)("bili_jct");if(""!==c&&"POST"===(null==r?void 0:r.method)&&null!=(null==r?void 0:r.data)){const t={csrf:c,csrf_token:c},e=Object.keys(t);r.data instanceof FormData?(e.forEach(e=>{var n;null===(n=r.data)||void 0===n||n.append(e,t[e])}),r.body=r.data):r.data&&(e.forEach(e=>{r.data[e]=t[e]}),r.body=JSON.stringify(r.data)),delete r.data}let l;try{l=yield fetch(t,Object.assign({credentials:"include"},null!=r?r:{}))}catch(p){const t=String(p);throw new Error(t)}if(!l.ok){const t=`url: ${a}, status: ${l.status}`;throw new Error(t)}const d=yield l.json(),{code:u,data:f,message:h}=d;if(0!==u)throw new Error(h);return f})}exports.ajax=a,a.disperse=((t,e)=>{const a=/^(https?:)?\/\//.test(t)?t:`${n}/${t.replace(/^\//,"")}`;o.set(a.replace(/^(https?:)?\/\//,""),e)});
})()