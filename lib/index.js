/*! For license information please see index.js.LICENSE.txt */
module.exports["react-lists"]=(()=>{var e={733:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GroupList:()=>q,List:()=>M});var n=r(294),o=r(697),i=r.n(o);const a={root:{position:"relative"},list:{listStyle:"none",padding:0,position:"relative",margin:0,width:"100%"},reverseList:{display:"flex",flexDirection:"column-reverse"},groupedList:{listStyle:"none",padding:0,margin:0,width:"100%",display:"flex",flexDirection:"column-reverse"},subHeader:{marginBottom:"10px",paddingBottom:"5px",top:0,width:"100%",zIndex:1},subHeaderSticky:{position:"sticky"},indexMenu:{position:"absolute",right:20,top:0,zIndex:2},indexMenuList:{listStyle:"none",padding:0,margin:0,width:"100%"},indexMenuListItem:{lineHeight:1,textAlign:"center"},indexMenuListItemLink:{color:"rgba(0, 0, 0, 0.54)",fontSize:"14px",cursor:"pointer",textDecoration:"none"}};var c={loading:{height:"60px",margin:"10px auto",position:"relative",top:"50%",width:"60px"}};const u=function(){return n.createElement("div",{style:c.loading},n.createElement("svg",{version:"1.1",id:"L9",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0"},n.createElement("path",{fill:"rgba(0, 82, 236, 0.70)",d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"},n.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"}))))};var s="react-lists";function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){var t=e.children,r=e.displayLoading,o=e.listHeight,i=e.listRef,c=e.loadingRenderer,l=e.reverse,f=e.onBottomReached,d=e.onLoadMore,y=e.onTopReached,b=n.useCallback((function(e){var t=i.current;t&&(t.scrollTop=e)}),[i]),m=n.useCallback((function(e){e&&d&&(d(),b(i.current.scrollTop))}),[b,i,d]),h=n.useCallback((function(){m(!l),f&&f()}),[m,f,l]),g=n.useCallback((function(){m(l),y&&y()}),[m,y,l]),O=n.useCallback((function(e,t,r){var n=t-e-Math.abs(r);if(l){if(0===r)return h();if(0===n)return g()}return 0===r?g():0===n?h():void 0}),[h,g,l]),v=n.useCallback((function(e){var t=e.target,r=t.offsetHeight,n=t.scrollHeight,o=t.scrollTop;O(r,n,o)}),[O]),j=p({},a.list);if(l&&(j=p(p({},j),a.reverseList)),!o||o<=0)throw new Error("The attribute listHeight is required and must be greater than 0.");return j=p(p({},j),{},{height:o,overflowY:"scroll"}),n.createElement("div",{style:a.root},n.createElement("ul",{ref:i,onScroll:v,style:j},t,function(){var e=c||u;if(r&&d){var t="".concat(s,"-key-loading");return n.createElement("li",{key:t},n.createElement(e,null))}}()))};d.defaultProps={displayLoading:!1},d.propTypes={children:i().node.isRequired,displayLoading:i().bool,listHeight:i().number.isRequired,listRef:i().oneOfType([i().func,i().shape({current:i().any})]),loadingRenderer:i().func,reverse:i().bool,onBottomReached:i().func,onLoadMore:i().func,onTopReached:i().func};const y=d;function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e){var t=e.item,r=e.renderer,o=e.onClick,i=r,a=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t);return"string"==typeof t&&(a={item:t}),n.createElement("li",{onClick:function(e){return function(t){t.preventDefault(),o&&o(e)}}(t)},n.createElement(i,a))};h.propTypes={item:i().oneOfType([i().string,i().object]).isRequired,renderer:i().func.isRequired,onClick:i().func};const g=h;function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var v=function(e){var t=n.useRef(null),r=e.items,o=e.itemRenderer,i=e.onItemClick;return n.createElement(y,O({listRef:t},e),r.map((function(e,t){var r=e.id||t;return n.createElement(g,{key:r,item:e,renderer:o,onClick:i})})))};v.defaultProps={displayLoading:!1,reverse:!1},v.propTypes={displayLoading:i().bool,items:i().oneOfType([i().array,i().shape({data:i().arrayOf(i().object),header:i().string})]).isRequired,itemRenderer:i().func.isRequired,listHeight:i().number.isRequired,loadingRenderer:i().func,reverse:i().bool,onBottomReached:i().func,onItemClick:i().func,onLoadMore:i().func,onTopReached:i().func};const j=v;function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var R=function(e){var t=e.height,r=e.items,o=e.onItemClick,i=(t/r.length-14)/2,c=P(P({},a.indexMenuListItem),{},{padding:i});return r.length?n.createElement("nav",{style:a.indexMenu},n.createElement("ul",{style:a.indexMenuList},r.map((function(e){return n.createElement("li",{key:e,style:c},n.createElement("a",{onClick:o("#".concat(s,"-index-").concat(e.toLowerCase())),style:a.indexMenuListItemLink},e))})))):null};R.propTypes={height:i().number.isRequired,items:i().arrayOf(i().string).isRequired,onItemClick:i().func.isRequired};const x=R;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L=function(e){var t=e.displayIndexMenu,r=e.displaySubHeaders,o=e.items,i=e.itemRenderer,c=e.listHeight,u=e.stickySubHeaders,l=e.subHeaderRenderer,p=e.onItemClick,f=n.useRef(null),d=function(e,t){var r=e.id||t;return n.createElement(g,{key:r,item:e,renderer:i,onClick:p})};return n.createElement("div",{style:a.root},n.createElement(y,S({listRef:f},e),Object.keys(o).map((function(e){var t=o[e].header,i=l||function(e){return e.text},c=a.subHeader;if(u&&(c=T(T({},c),a.subHeaderSticky)),t)return n.createElement("li",{id:"".concat(s,"-index-").concat(e.toLowerCase()),key:e},r&&n.createElement("header",{className:"".concat(s,"-subheader"),style:c},n.createElement(i,{text:t})),n.createElement("ul",{style:a.groupedList},o[e].data.map(d)));throw new Error('The object should have a attribute called "'.concat("header",'"'))}))),t&&n.createElement(x,{height:c,items:Object.keys(o).map((function(e){return o[e].header})),onItemClick:function(e){return function(t){t.preventDefault(),f.current&&(f.current.scrollTop=document.querySelector(e).offsetTop)}}}))};L.defaultProps={displayIndexMenu:!1,displayLoading:!1,displaySubHeaders:!0,stickySubHeaders:!0},L.propTypes={displayIndexMenu:i().bool,displayLoading:i().bool,displaySubHeaders:i().bool,items:i().oneOfType([i().array,i().shape({data:i().arrayOf(i().object),header:i().string})]).isRequired,itemRenderer:i().func.isRequired,listHeight:i().number.isRequired,loadingRenderer:i().func,reverse:i().bool,stickySubHeaders:i().bool,subHeaderRenderer:i().func,onBottomReached:i().func,onItemClick:i().func,onLoadMore:i().func,onTopReached:i().func};var M=j,q=L},418:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,c,u=o(e),s=1;s<arguments.length;s++){for(var l in a=Object(arguments[s]))r.call(a,l)&&(u[l]=a[l]);if(t){c=t(a);for(var p=0;p<c.length;p++)n.call(a,c[p])&&(u[c[p]]=a[c[p]])}}return u}},703:(e,t,r)=>{"use strict";var n=r(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},697:(e,t,r)=>{e.exports=r(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},408:(e,t,r)=>{"use strict";var n=r(418),o=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),i("react.portal"),i("react.fragment"),i("react.strict_mode"),i("react.profiler"),i("react.provider"),i("react.context"),i("react.forward_ref"),i("react.suspense"),i("react.memo"),i("react.lazy")}"function"==typeof Symbol&&Symbol.iterator;function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},u={};function s(e,t,r){this.props=e,this.context=t,this.refs=u,this.updater=r||c}function l(){}function p(e,t,r){this.props=e,this.context=t,this.refs=u,this.updater=r||c}s.prototype.isReactComponent={},s.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(a(85));this.updater.enqueueSetState(this,e,t,"setState")},s.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},l.prototype=s.prototype;var f=p.prototype=new l;f.constructor=p,n(f,s.prototype),f.isPureReactComponent=!0;var d=null,y=Object.prototype.hasOwnProperty,b={key:!0,ref:!0,__self:!0,__source:!0};var m=null;function h(){var e=m;if(null===e)throw Error(a(321));return e}t.createElement=function(e,t,r){var n,i={},a=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)y.call(t,n)&&!b.hasOwnProperty(n)&&(i[n]=t[n]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];i.children=s}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===i[n]&&(i[n]=u[n]);return{$$typeof:o,type:e,key:a,ref:c,props:i,_owner:d}},t.useCallback=function(e,t){return h().useCallback(e,t)},t.useRef=function(e){return h().useRef(e)}},294:(e,t,r)=>{"use strict";e.exports=r(408)}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}return r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(733)})();