/**
 * id: ZWNU
 * path: ./danmaku-biz
 */

(function(require,module,exports) {
"use strict";var e,t,n,o,i,r,a,s,l,c,u,d,f,h,p,m,y=this&&this.__assign||function(){return(y=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},k=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&("get"in i?t.__esModule:!i.writable&&!i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,i)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),v=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),b=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&k(t,e,n);return v(t,e),t},g=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function a(e){try{l(o.next(e))}catch(t){r(t)}}function s(e){try{l(o.throw(e))}catch(t){r(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,s)}l((o=o.apply(e,t||[])).next())})},w=this&&this.__generator||function(e,t){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,s[0]&&(a=0)),a;)try{if(n=1,o&&(i=2&s[0]?o.return:s[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,s[1])).done)return i;switch(o=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,o=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(l){s=[6,l],o=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}},_=this&&this.__classPrivateFieldSet||function(e,t,n,o,i){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===o?i.call(e,n):i?i.value=n:t.set(e,n),n},M=this&&this.__classPrivateFieldGet||function(e,t,n,o){if("a"===n&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?o:"a"===n?o.call(e):o?o.value:t.get(e)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.roomBlockAdapter=exports.DanmakuBiz=void 0;var S=require("@bilibili-live/web-player-common"),D=b(require("@bilibili-live/web-player-danmaku")),T=require("./biz-interface"),B=require("./biz-common"),O=require("@bilibili-live/live-shadow"),x={mode:1,size:25,color:16777215},j=function(){function k(y,k){var v=this;this.container=y,this.opts=k,e.set(this,void 0),t.set(this,[]),n.set(this,[]),o.set(this,{rank:!1,verify:!1,level:0}),i.set(this,[]),r.set(this,[]),a.set(this,null),s.set(this,!1),l.set(this,{}),c.set(this,0),u.set(this,{mode:x.mode,color:x.color,length:20}),d.set(this,{type:"level",level:0,second:0}),f.set(this,!0),this.bodyMaskDetectorStatus=!1,h.set(this,[]),p.set(this,!1),this.maskState=!1,this.isBlocked=function(e){var a;return!!M(v,i,"f").includes(e.type)||(!!M(v,r,"f").includes(e.dmType)||(M(v,o,"f").level>e.user.level||(!!(M(v,o,"f").rank&&e.user.rank<1e4)||(!(null===(a=M(v,o,"f"))||void 0===a||!a.verify||e.user.verify)||(!!M(v,n,"f").some(function(t){return e.text.includes(t)})||!!M(v,t,"f").some(function(t){return t.id===e.uid}))))))},m.set(this,function(e){if(null!=e&&(Array.isArray(e.keyword_list)&&e.keyword_list.forEach(function(e){v.blockKeyword(e,"add")}),Array.isArray(e.shield_user_list)&&e.shield_user_list.forEach(function(e){var t=e.uid,n=e.uname;v.blockUser({uid:t,uname:n},"add")}),null!=(null==e?void 0:e.shield_rules))){var t=e.shield_rules;M(v,o,"f").level=Number(t.level),M(v,o,"f").rank=Boolean(t.rank),M(v,o,"f").verify=Boolean(t.verify)}}),this.getDanmakuElement=function(){return M(v,e,"f").getDanmakuElement()},this.fullscreenDM=function(){M(v,e,"f").fullscreenDM()},this.offsetDM=function(t){M(v,e,"f").offsetDM(t)},_(this,e,new D.default(this.container,k),"f"),this.danmakuStateHandler=K(this),(0,B.updateDanmakuSetting)(S.userSetting.getDanmaku(),this)}return k.supportMaskDanmaku=function(){return O.bodyMaskDetector.isSupported()},k.prototype.onSei=function(t){M(this,e,"f").addMaskSVG(t)},k.prototype.clearMask=function(){M(this,e,"f").clearMask()},k.prototype.changeMaskState=function(t,n,o){void 0===o&&(o=!1),this.maskState=n,n?M(this,e,"f").addMaskToWrap(t):M(this,e,"f").closeMask(o)},k.prototype.connectSocket=function(t,n){_(this,a,L(M(this,e,"f"),this,t,y(y({},this.opts),{isBlocked:this.isBlocked,emitDanmaku:n})),"f")},k.prototype.initDanmakuConfig=function(e){_(this,s,!0,"f"),null!=e.userBlockInfo&&M(this,m,"f").call(this,e.userBlockInfo),null!=e.danmakuInfo&&_(this,u,Object.assign(M(this,u,"f"),e.danmakuInfo),"f"),null!=e.roomBlockInfo&&_(this,d,Object.assign(M(this,d,"f"),e.roomBlockInfo),"f")},k.prototype.getBlockList=function(){return M(this,n,"f").concat(M(this,t,"f").map(function(e){var t=e.id,n=e.name;return"".concat(t,"_").concat(n)}))},k.prototype.setBlockTypes=function(e){Array.isArray(e)&&_(this,i,e,"f")},k.prototype.setBlockSpecialDanmakuTypes=function(e){Array.isArray(e)&&_(this,r,e,"f")},k.prototype.blockUser=function(e,n){"add"===n&&null!=e.uid&&null!=e.uname?(M(this,l,"f")[M(this,c,"f")]={type:"user",value:e.uid},_(this,c,M(this,c,"f")+1,"f"),M(this,t,"f").push({id:e.uid,name:e.uname})):"del"===n&&_(this,t,M(this,t,"f").filter(function(t){return t.id!==e.uid}),"f")},k.prototype.supportMaskDanmaku=function(){return O.bodyMaskDetector.isSupported()},k.prototype.setDanmakuMask=function(t){var n=M(this,e,"f").getDanmakuElement();""!==t?(n.style.webkitMaskImage="url(".concat(t,")"),n.style.webkitMaskSize="100%, 100%"):(n.style.webkitMaskImage="",n.style.webkitMaskSize="")},k.prototype.enableMaskDanmaku=function(e){var t,n=this;null===(t=this.stopBodyMaskDetector)||void 0===t||t.call(this),S.logger.debug("enable MaskDanmaku"),M(this,f,"f")&&(this.bodyMaskDetectorStatus=!0,O.bodyMaskDetector.start(e,function(e){M(n,p,"f")?n.setDanmakuMask(""):"string"==typeof e&&n.setDanmakuMask(e)},{type:"base64"}).then(function(e){S.logger.info("stop resolved");var t=function(){S.logger.info("clear trigger, ".concat(M(n,h,"f").length)),M(n,h,"f").forEach(function(e){return null==e?void 0:e()}),_(n,h,[],"f")};t(),M(n,h,"f").push(e),n.stopBodyMaskDetector=function(){S.logger.info("stop trigger"),n.setDanmakuMask(""),n.stopBodyMaskDetector=void 0,n.bodyMaskDetectorStatus=!1,t()},n.bodyMaskDetectorStatus||n.stopBodyMaskDetector()}).catch(function(e){n.setDanmakuMask(""),S.logger.error(e)}))},k.prototype.blockKeyword=function(e,t){"add"!==t||M(this,n,"f").includes(e)?"del"===t&&_(this,n,M(this,n,"f").filter(function(t){return t!==e}),"f"):(M(this,l,"f")[M(this,c,"f")]={type:"keyword",value:e},_(this,c,M(this,c,"f")+1,"f"),M(this,n,"f").push(e))},k.prototype.findBlockKwOrUserByIdx=function(e){return M(this,l,"f")[e]},k.prototype.blockBatchUsers=function(e,t){"level"===e?M(this,o,"f").level=t:["rank","verify"].includes(e)&&(M(this,o,"f")[e]=Boolean(t))},k.prototype.clear=function(){M(this,e,"f").clear()},k.prototype.userSendDanmaku=function(t){var n,o,i,r,a;return g(this,void 0,Promise,function(){var s,l=this;return w(this,function(c){switch(c.label){case 0:return s={stime:-1,mode:null!==(n=t.mode)&&void 0!==n?n:x.mode,size:null!==(o=t.fontsize)&&void 0!==o?o:x.size,color:null!==(i=t.color)&&void 0!==i?i:x.color,date:performance.now(),uid:this.opts.userId,dmid:this.opts.rnd,text:t.msg,border:!0,borderColor:"66FFFF",uname:"",isMaster:!0,dmType:D.DmType.Text},t.dm_type===D.DmType.Emoji&&(s=Object.assign({},s,{emoticonOptions:t.emoticonOptions,text:null===(r=t.emoticonOptions)||void 0===r?void 0:r.emoji,dmType:D.DmType.Emoji}),delete t.emoticonOptions),delete t.isIgnore,delete t.uniqueID,!0!==t.localOnly?[3,2]:(M(this,e,"f").add(y(y({},s),{extra:null!==(a=t.extra)&&void 0!==a?a:{}}),!0),[4,Promise.resolve(null)]);case 1:return[2,c.sent()];case 2:return[4,new Promise(function(n,o){E(y(y({},t),{color:s.color,fontsize:s.size,mode:s.mode,rnd:s.dmid,roomid:l.opts.roomId}),function(o){var i,r,a;if(0===o.code&&M(l,f,"f")){var c=null===(i=o.data)||void 0===i?void 0:i.mode_info;s.modeInfo=c,s.dm_v2=o.data.dm_v2,s.dmType===D.DmType.Emoji&&1!==(null!==(a=null===(r=t.emoticonOptions)||void 0===r?void 0:r.inPlayerArea)&&void 0!==a?a:1)||M(l,e,"f").add(s,!0)}n(o)}).catch(function(e){o(e)})})];case 3:return[2,c.sent()]}})})},k.prototype.onSelect=function(t){M(this,e,"f").onSelect(t)},k.prototype.offSelect=function(){M(this,e,"f").offSelect()},k.prototype.getDanmakuConfig=function(){var e=M(this,u,"f").color.toString(16);return e=(Array(6).join("0")+e).slice(-6),{ready:M(this,s,"f"),level:M(this,o,"f").level,shield_list:this.getBlockList(),shield_keyword:M(this,n,"f"),shield_users:M(this,t,"f").map(function(e){var t=e.id,n=e.name;return"".concat(t,"_").concat(n)}),danmu_color:"0x".concat(e),danmu_length:M(this,u,"f").length,danmu_mode:M(this,u,"f").mode,room_silent_type:M(this,d,"f").type,room_silent_level:M(this,d,"f").level,room_silent_second:M(this,d,"f").second,user_silent_level:M(this,o,"f").level,user_silent_rank:M(this,o,"f").rank,user_silent_verify:M(this,o,"f").verify}},k.prototype.fetchBlockRules=function(){var e=this;(0,S.ajax)("/banned_service/v1/shield/get_shield_info").then(function(t){M(e,m,"f").call(e,t)}).catch(function(e){S.logger.error(e)})},k.prototype.show=function(){_(this,f,!0,"f"),M(this,e,"f").show(),this.danmakuStateHandler.dmSwitch(!0)},k.prototype.hide=function(){_(this,f,!1,"f"),M(this,e,"f").hide(),this.danmakuStateHandler.dmSwitch(!1)},k.prototype.resize=function(){M(this,e,"f").resize()},k.prototype.set=function(){for(var t,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];(t=M(this,e,"f")).set.apply(t,n)},k.prototype.destroy=function(){var t,n;null===(t=M(this,a,"f"))||void 0===t||t.call(this),M(this,e,"f").destroy(),null===(n=this.stopBodyMaskDetector)||void 0===n||n.call(this),this.danmakuStateHandler.destroy()},k.prototype.updateDanmakuExtraConfig=function(e,t){var n,o,i;void 0===t&&(t=!1),_(this,p,e.dm_tag>0&&e.platform.includes(t?T.EPlatform.H5:T.EPlatform.Web),"f"),this.set({extra:{type:M(this,p,"f")?e.dm_tag:0,useMode:null!==(n=null==e?void 0:e.dm_mode)&&void 0!==n?n:[],config:null!==(o=null==e?void 0:e.dm_chronos_extra)&&void 0!==o?o:"",material:null!==(i=null==e?void 0:e.material_conf)&&void 0!==i?i:[]}})},k}();function P(e,t,n,o){if("block"===e.component){var i=e.action,r=e.data,a=e.callback;switch(i){case"addShieldUser":t.blockUser(null!=r?r:{},"add"),o("addShieldList",{code:0,msg:"".concat(r.uid,"_").concat(r.uname,"]}")});break;case"addShieldWord":A("add",r,function(e){0===e.code?(t.blockKeyword(r,"add"),o("addShieldList",{code:0,msg:r})):o("addShieldList",Object.assign({},e,{msg:e.message}))});break;case"deleteShieldId":Array.isArray(r)&&r.forEach(function(e){var i=t.findBlockKwOrUserByIdx(e),r=i.type,a=i.value;"keyword"===r?A("del",a,function(n){0===n.code?(t.blockKeyword(a,"del"),o("deleteShieldList",{code:0,msg:[e]})):o("deleteShieldList",Object.assign({},n,{msg:n.message}))}):"user"===r&&I("del",a,n,function(n){0===n.code?(t.blockUser({uid:a},"del"),o("deleteShieldList",{code:0,msg:[e]})):o("deleteShieldList",n)})});break;case"blockDanmaku":t.setBlockTypes(r.type);break;case"blockSpecialDanmaku":t.setBlockSpecialDanmakuTypes(r.type);break;case"roomListShield":W(Boolean(r),n).then(function(){o("roomListShield",Boolean(r))}).catch(function(e){S.logger.error(e)});break;case"globalShield":if(null==(null==r?void 0:r.type))break;z({type:r.type,level:r.level,minute:r.minutes},n,function(e){o("globalShield",e)});break;case"setUserShield":U({type:r.type,level:r.level,callback:function(e){null==a||a(e),0===e.code&&t.blockBatchUsers(r.type,r.level)}}).catch(function(e){S.logger.error(e)})}}}function E(e,t){return g(this,void 0,Promise,function(){return w(this,function(n){switch(n.label){case 0:return[4,(0,S.ajax)("/msg/send",{method:"POST",data:e,handleRes:t})];case 1:return[2,n.sent()]}})})}function A(e,t,n){var o="/xlive/web-ucenter/v1/banned/DelShieldKeyword";"add"===e&&(o="/xlive/web-ucenter/v1/banned/AddShieldKeyword"),(0,S.ajax)(o,{method:"POST",data:{keyword:t},handleRes:n}).catch(function(e){S.logger.error(e)})}function I(e,t,n,o){(0,S.ajax)("/liveact/shield_user",{method:"POST",data:{uid:t,roomid:n,type:"add"===e?1:0},handleRes:o}).catch(function(e){S.logger.error(e)})}function W(e,t){return g(this,void 0,Promise,function(){return w(this,function(n){switch(n.label){case 0:return[4,(0,S.ajax)("/liveact/set_room_shield",{method:"POST",data:{roomid:t,type:e}})];case 1:return n.sent(),[2]}})})}function z(e,t,n){var o=e.type,i=e.level,r=e.minute;(0,S.ajax)("/liveact/room_silent",{method:"POST",data:{room_id:t,type:o,level:i,minute:r},handleRes:n}).catch(function(e){S.logger.error(e)})}function U(e){var t=e.type,n=e.level,o=e.callback;return g(this,void 0,Promise,function(){return w(this,function(e){switch(e.label){case 0:return[4,(0,S.ajax)("/liveact/user_silent",{method:"POST",data:{type:t,level:n},handleRes:o})];case 1:return e.sent(),[2]}})})}function L(e,t,n,o){var i=o.userId,r=o.rnd,a=o.isBlocked,s=o.emitDanmaku,l=o.isMobile;return e.clear(),e.play(),n.on("message",function(n){var o,c,u,d;if("DANMU_TAG_CHANGE"===n.cmd&&t.updateDanmakuExtraConfig(n.data,l),n.cmd.startsWith("DANMU_MSG")){var f=N(n.cmd),h=f.web,p=f.h5,m=C(n.info);m.dm_v2=n.dm_v2;var k=null!==(c=null===(o=m.modeInfo)||void 0===o?void 0:o.extra)&&void 0!==c?c:"{}",v={is_audited:!1};try{v=JSON.parse(k)}catch(g){S.logger.error(g)}if((v.is_audited||m.uid!==i||m.dmid!==r)&&!a(m)){var b=!0===l?p:h;b.danmaku&&(m.dmType===D.DmType.Emoji&&1!==(null!==(d=null===(u=m.emoticonOptions)||void 0===u?void 0:u.in_player_area)&&void 0!==d?d:1)||(e.add(m),t.danmakuStateHandler.dmMsg())),b.panel&&s(y(y({},n),{cmd:"DANMU_MSG"}))}}})}function N(e){if(!e.includes(":"))return{h5:{danmaku:!0,panel:!0},web:{danmaku:!0,panel:!0}};var t=e.split(":"),n=t[4],o=t[5];return{web:{panel:0==(1&Number(n)),danmaku:0==(Number(n)>>1&1)},h5:{panel:0==(1&Number(o)),danmaku:0==(Number(o)>>1&1)}}}function C(e){var t=e[0][12],n=e[0][14],o=e[0][13],i={stime:-1,mode:e[0][1],size:e[0][2],color:e[0][3],date:performance.now(),uid:e[2][0],dmid:e[0][5],text:e[1],uname:e[2][1],user:{level:e[4][0],rank:e[2][5],verify:Boolean(e[2][6])},checkInfo:{ts:e[9].ts,ct:e[9].ct},type:e[0][9],dmType:D.DmType.Text,modeInfo:e[0][15]};return t===D.DmType.Emoji?Object.assign({},i,{emoticonOptions:o,dmType:D.DmType.Emoji}):t===D.DmType.Voice?Object.assign({},i,{dmType:D.DmType.Voice,voiceConfig:n}):i}exports.DanmakuBiz=j,e=new WeakMap,t=new WeakMap,n=new WeakMap,o=new WeakMap,i=new WeakMap,r=new WeakMap,a=new WeakMap,s=new WeakMap,l=new WeakMap,c=new WeakMap,u=new WeakMap,d=new WeakMap,f=new WeakMap,h=new WeakMap,p=new WeakMap,m=new WeakMap,exports.roomBlockAdapter=P;var K=function(e){var t=null,n=-1,o=!1,i=!1,r=!1,a=!0,s=function(){var n;i&&r&&o&&null!=t?a||(a=!0,e.enableMaskDanmaku(t)):(a=!1,null===(n=e.stopBodyMaskDetector)||void 0===n||n.call(e))};return{dmSwitch:function(e){o=e,s()},updateVideoEl:function(e){t=e,s()},maskSwitch:function(e){i=e,s()},dmMsg:function(){clearTimeout(n),r=!0,n=window.setTimeout(function(){r=!1,s()},2e4),s()},destroy:function(){clearTimeout(n)}}};
})()