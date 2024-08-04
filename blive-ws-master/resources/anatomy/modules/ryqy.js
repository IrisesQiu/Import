/**
 * id: ryqy
 * path: ./bili-p2p
 */

(function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.bindBili=exports.getTrackerParamsString=void 0;var r=require("@bilibili-live/web-player-common"),i=t(require("@bilibili-live/fmp4.js")),a=require("@bilibili-live/sisters-p2p"),n=function(e,t){var r,i=null!==(r=u(e))&&void 0!==r?r:{},n=i.streamName,l=i.timeshift;return a.SistersPlayerContext.getTrackerParamsString({stream:n,roomid:t,timeshift:l})};exports.getTrackerParamsString=n;var l={};function o(e){var t,n=e.corePlayer,o=e.videoEl,d=e.src,c=e.roomId,m=e.trackerServer;if(!(n instanceof i.default.Hls7Player))return r.logger.error("bilibili p2p must use be Hls7Player instance"),null;var f=null!==(t=u(d))&&void 0!==t?t:{},v=f.streamName,p=f.timeshift;if(null==v)return r.logger.error("can't detect stream name in url"),null;if(!a.SistersPlayerContext.checkP2PSupport())return r.logger.error("unsupported bilibili p2p"),null;l={};var g=new a.SistersPlayerContext(function(e,t){t.includes("pc.addEventListener is not a function")||r.logger.info(t)},{trackerParams:{stream:v,roomid:c,timeshift:p},sdkParams:{trackerServers:m}});if(void 0!==g.getStatisticsData)throw new Error("getStatisticsData is exist, cannot be extended");return g.getStatisticsData=s(g,{timeshift:p,streamName:v}),n.setP2PContext({P2PBufferLength:3,P2PFetchAsStream:function(e,t){void 0===t&&(t=!1),g.p2pFetchAsBuffer(this._onError,this._onResult,function(){return 1e3*(0,r.remainBufferLength)(o)},e,t)},onPlaylistUpdate:function(e,t){g.updatePlaylist(e,t)}}),g}function s(t,i){var n=i.timeshift,o=i.streamName;return function(){var i,s,u,d,c,m,f,v,p,g,P=t.getP2PDataCollectionStatus();if(null==P)return null;var h=null!==(i=P.getQueryServerInfo())&&void 0!==i?i:{},S=h.fragNum,b=void 0===S?0:S,y=h.queryNum,D=void 0===y?0:y,_=e(e({cdnDownloadValidSize:null!==(s=P.getServerDownload())&&void 0!==s?s:0,cdnDownloadInvalidSize:null!==(u=P.getWastedDataSize(a.WastedDataType.CDN_REPEAT))&&void 0!==u?u:0,fetchErrorNum:null!==(d=P.getFetchErrorNum(a.FetchErrorType.ERROR_TO_RELOAD))&&void 0!==d?d:0,p2pDownloadValidSize:null!==(c=P.getP2PDownload())&&void 0!==c?c:0,p2pDownloadInvalidSize:null!==(m=P.getWastedDataSize(a.WastedDataType.P2P_LATE))&&void 0!==m?m:0,p2pErrorSize:null!==(f=P.getWastedDataSize(a.WastedDataType.ERROR_DATA))&&void 0!==f?f:0,p2pUploadSize:null!==(v=P.getP2PSend())&&void 0!==v?v:0,fragNum:b,queryNum:D,timeshift:n,streamName:o},null!==(p=P.getExtendReportInfo())&&void 0!==p?p:{}),null!==(g=P.getTrackerInfo())&&void 0!==g?g:{});if(0===Object.keys(l).length)return l=_,_;var E=(0,r.minusObject)(l,_);return l=_,E}}function u(e){var t=/\/live-bvc\/\d{3,9}\/(live_.+?)[/.]/.exec(e);if(null==t)return{timeshift:0,streamName:null};var r=Number(new URL(e).searchParams.get("tmshift"));return{streamName:t[1],timeshift:r}}exports.bindBili=o;
})()