(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[29],{1114:function(e,n,t){var r=t(725),o=t(707),u=t(708),a=t(719),l=t(720),i=t(721),c=t(709),s=t(722),p=t(700);function f(e,n,t){return n=i(n),a(e,l()?Reflect.construct(n,t||[],i(e).constructor):n.apply(e,t))}var y,d=Object.create,v=Object.defineProperty,m=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyNames,g=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty,k=function(e,n,t,r){if(n&&"object"===typeof n||"function"===typeof n){var o,u=p(h(n));try{var a=function(){var u=o.value;b.call(e,u)||u===t||v(e,u,{get:function(){return n[u]},enumerable:!(r=m(n,u))||r.enumerable})};for(u.s();!(o=u.n()).done;)a()}catch(l){u.e(l)}finally{u.f()}}return e},P=function(e,n,t){return function(e,n,t){n in e?v(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t}(e,"symbol"!==typeof n?n+"":n,t),t},w={};!function(e,n){for(var t in n)v(e,t,{get:n[t],enumerable:!0})}(w,{default:function(){return x}}),e.exports=(y=w,k(v({},"__esModule",{value:!0}),y));var O=function(e,n,t){return t=null!=e?d(g(e)):{},k(!n&&e&&e.__esModule?t:v(t,"default",{value:e,enumerable:!0}),e)}(t(0)),j=t(743),M=t(748),x=function(e){"use strict";function n(){var e;return o(this,n),e=f(this,n,arguments),P(c(e),"callPlayer",j.callPlayer),P(c(e),"duration",null),P(c(e),"currentTime",null),P(c(e),"secondsLoaded",null),P(c(e),"mute",(function(){})),P(c(e),"unmute",(function(){})),P(c(e),"ref",(function(n){e.iframe=n})),e}return s(n,e),u(n,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var n=this;(0,j.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js","Mixcloud").then((function(e){n.player=e.PlayerWidget(n.iframe),n.player.ready.then((function(){n.player.events.play.on(n.props.onPlay),n.player.events.pause.on(n.props.onPause),n.player.events.ended.on(n.props.onEnded),n.player.events.error.on(n.props.error),n.player.events.progress.on((function(e,t){n.currentTime=e,n.duration=t})),n.props.onReady()}))}),this.props.onError)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),n||this.pause()}},{key:"setVolume",value:function(e){}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var e=this.props,n=e.url,t=e.config,o=n.match(M.MATCH_URL_MIXCLOUD)[1],u=(0,j.queryString)(r(r({},t.options),{},{feed:"/".concat(o,"/")}));return O.default.createElement("iframe",{key:o,ref:this.ref,style:{width:"100%",height:"100%"},src:"https://www.mixcloud.com/widget/iframe/?".concat(u),frameBorder:"0",allow:"autoplay"})}}]),n}(O.Component);P(x,"displayName","Mixcloud"),P(x,"canPlay",M.canPlay.mixcloud),P(x,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerMixcloud.4ea544c7.chunk.js.map