(this.webpackJsonpparagoria=this.webpackJsonpparagoria||[]).push([[5],{180:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var c=n?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(r,o,c):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(0)),o=r(46);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(v,e);var t,r,u,i,h=(t=v,function(){var e,r=d(t);if(y()){var n=d(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return p(this,e)});function v(){var e;a(this,v);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return b(s(e=h.call.apply(h,[this].concat(r))),"callPlayer",o.callPlayer),b(s(e),"duration",null),b(s(e),"currentTime",null),b(s(e),"fractionLoaded",null),b(s(e),"mute",(function(){e.setVolume(0)})),b(s(e),"unmute",(function(){null!==e.props.volume&&e.setVolume(e.props.volume)})),b(s(e),"ref",(function(t){e.iframe=t})),e}return r=v,(u=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e,t){var r=this;(0,o.getSDK)("https://w.soundcloud.com/player/api.js","SC").then((function(n){if(r.iframe){var o=n.Widget.Events,u=o.PLAY,i=o.PLAY_PROGRESS,a=o.PAUSE,l=o.FINISH,f=o.ERROR;t||(r.player=n.Widget(r.iframe),r.player.bind(u,r.props.onPlay),r.player.bind(a,(function(){r.duration-r.currentTime<.05||r.props.onPause()})),r.player.bind(i,(function(e){r.currentTime=e.currentPosition/1e3,r.fractionLoaded=e.loadedProgress})),r.player.bind(l,(function(){return r.props.onEnded()})),r.player.bind(f,(function(e){return r.props.onError(e)}))),r.player.load(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r.props.config.options,{callback:function(){r.player.getDuration((function(e){r.duration=e/1e3,r.props.onReady()}))}}))}}))}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){this.callPlayer("seekTo",1e3*e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.fractionLoaded*this.duration}},{key:"render",value:function(){var e={width:"100%",height:"100%",display:this.props.display};return n.default.createElement("iframe",{ref:this.ref,src:"https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),style:e,frameBorder:0,allow:"autoplay"})}}])&&l(r.prototype,u),i&&l(r,i),v}(n.Component);t.default=h,b(h,"displayName","SoundCloud"),b(h,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerSoundCloud.5aa39a99.chunk.js.map