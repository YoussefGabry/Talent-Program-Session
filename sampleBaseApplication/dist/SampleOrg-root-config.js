System.register(["single-spa"],(function(e,t){var n={};return Object.defineProperty(n,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(t){n[t]=e[t]}))}],execute:function(){e((()=>{var e={126:(e,t,n)=>{const r=n(358).y;t.w=function(e){if(e||(e=1),!n.y.meta||!n.y.meta.url)throw console.error("__system_context__",n.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");n.p=r(n.y.meta.url,e)}},358:(e,t,n)=>{t.y=function(e,t){var n=document.createElement("a");n.href=e;for(var r="/"===n.pathname[0]?n.pathname:"/"+n.pathname,o=0,a=r.length;o!==t&&a>=0;)"/"===r[--a]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var i=r.slice(0,a+1);return n.protocol+"//"+n.host+i};Number.isInteger},496:e=>{"use strict";e.exports=n}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var a=r[t]={exports:{}};return e[t](a,a.exports,o),a.exports}return o.y=t,o.p="",(0,o(126).w)(1),(()=>{"use strict";var e=o(496);function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u="undefined"!=typeof window;function l(e,n){if("object"!==t(n)||Array.isArray(n)||null===n)throw Error("Invalid ".concat(e,": received ").concat(Array.isArray(n)?"array":n," but expected a plain object"))}function p(e,n){if("boolean"!=typeof n)throw Error("Invalid ".concat(e,": received ").concat(t(n),", but expected a boolean"))}function d(e,t,n,r){if(!r){var o=Object.keys(t),a=[];o.forEach((function(e){n.indexOf(e)<0&&a.push(e)})),a.length>0&&console.warn(Error("Invalid ".concat(e,": received invalid properties '").concat(a.join(", "),"', but valid properties are ").concat(n.join(", "))))}}function f(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("string"!=typeof t||n&&""===t.trim())throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected a").concat(n?" non-blank":""," string"))}function h(e,t){if(f(e,t),t.indexOf("/")<0)throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected an absolute path that starts with /"))}function m(e,n,r){if(!Array.isArray(n)&&("object"!==t(t(n))||"number"!==n.length))throw Error("Invalid ".concat(e,": received '").concat(n,"', but expected an array"));for(var o=arguments.length,a=new Array(o>3?o-3:0),i=3;i<o;i++)a[i-3]=arguments[i];for(var c=0;c<n.length;c++)r.apply(void 0,[n[c],"".concat(e,"[").concat(c,"]")].concat(a))}function v(e,t){var n;return"/"===(n="/"===e.substr(-1)?"/"===t[0]?e+t.slice(1):e+t:"/"===t[0]?e+t:e+"/"+t).substr(-1)&&n.length>1&&(n=n.slice(0,n.length-1)),n}function y(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n];return null}var g=Object.prototype.hasOwnProperty.call(e,"default")?Object.getOwnPropertyDescriptor(e,"default").value.pathToActiveWhen:e.pathToActiveWhen,b="undefined"!=typeof Symbol?Symbol():"@";function w(e,t){if(u)return e.getAttribute(t);var n=y(e.attrs,(function(e){return e.name===t.toLowerCase()}));return n?n.value:null}function E(e,t){return u?e.hasAttribute(t):e.attrs.some((function(e){return e.name===t}))}function N(e,t,n){if("application"===e.nodeName.toLowerCase()){if(e.childNodes.length>0)throw Error("<application> elements must not have childNodes. You must put in a closing </application> - self closing is not allowed");var r={type:"application",name:w(e,"name")},o=w(e,"loader");if(o)if(t.loaders&&t.loaders.hasOwnProperty(o))r.loader=t.loaders[o];else if(u)throw Error("Application loader '".concat(o,"' was not defined in the htmlLayoutData"));var a=w(e,"error");if(a)if(t.errors&&t.errors.hasOwnProperty(a))r.error=t.errors[a];else if(u)throw Error("Application error handler '".concat(o,"' was not defined in the htmlLayoutData"));return O(e,r,t),[r]}if("route"===e.nodeName.toLowerCase()){var c={type:"route",routes:[]},s=w(e,"path");s&&(c.path=s),E(e,"default")&&(c.default=!0),E(e,"exact")&&(c.exact=!0),O(e,c,t);for(var l=0;l<e.childNodes.length;l++){var p;(p=c.routes).push.apply(p,i(N(e.childNodes[l],t,n)))}return[c]}if("redirect"===e.nodeName.toLowerCase())return n.redirects[v("/",w(e,"from"))]=v("/",w(e,"to")),[];if("undefined"!=typeof Node&&e instanceof Node){if(e.nodeType===Node.TEXT_NODE&&""===e.textContent.trim())return[];if(e.childNodes&&e.childNodes.length>0){e.routes=[];for(var d=0;d<e.childNodes.length;d++){var f;(f=e.routes).push.apply(f,i(N(e.childNodes[d],t,n)))}}return[e]}if(e.childNodes){for(var h={type:e.nodeName.toLowerCase(),routes:[],attrs:e.attrs},m=0;m<e.childNodes.length;m++){var y;(y=h.routes).push.apply(y,i(N(e.childNodes[m],t,n)))}return[h]}return"#comment"===e.nodeName?[{type:"#comment",value:e.data}]:"#text"===e.nodeName?[{type:"#text",value:e.value}]:void 0}function O(e,t,n){for(var r=(w(e,"props")||"").split(","),o=0;o<r.length;o++){var a=r[o].trim();if(0!==a.length)if(t.props||(t.props={}),n.props&&n.props.hasOwnProperty(a))t.props[a]=n.props[a];else{if(u)throw Error("Prop '".concat(a,"' was not defined in the htmlLayoutData. Either remove this attribute from the HTML element or provide the prop's value"));t.props[a]=b}}}function x(e){return{bootstrap:function(){return Promise.resolve()},mount:function(t){return Promise.resolve().then((function(){t.domElement.innerHTML=e}))},unmount:function(e){return Promise.resolve().then((function(){e.domElement.innerHTML=""}))}}}function A(e){var t=e.location,n=e.routes,r=e.parentContainer,o=e.previousSibling,a=e.shouldMount,i=e.applicationContainers;return n.forEach((function(e,n){if("application"===e.type){if(a){var c,s=j(e.name);i[e.name]?c=i[e.name]:document.getElementById(s)?c=document.getElementById(s):(c=document.createElement("div")).id=s,C(c,r,o),o=c}}else if("route"===e.type)o=A({location:t,routes:e.routes,parentContainer:r,previousSibling:o,shouldMount:a&&e.activeWhen(t),applicationContainers:i});else if(e instanceof Node||"string"==typeof e.type)if(a){if(!e.connectedNode){var u=e instanceof Node?e.cloneNode(!1):L(e);e.connectedNode=u}C(e.connectedNode,r,o),e.routes&&A({location:t,routes:e.routes,parentContainer:e.connectedNode,previousSibling:null,shouldMount:a,applicationContainers:i}),o=e.connectedNode}else(l=e.connectedNode)&&(l.remove?l.remove():l.parentNode.removeChild(l)),delete e.connectedNode;var l})),o}function P(e){for(var t=e.applicationName,n=e.location,r=e.routes,o=0;o<r.length;o++){var a=r[o];if("application"===a.type){if(a.name===t)return a}else if("route"===a.type){if(a.activeWhen(n)){var i=P({applicationName:t,location:n,routes:a.routes});if(i)return i}}else if(a.routes){var c=P({applicationName:t,location:n,routes:a.routes});if(c)return c}}}function C(e,t,n){var r=n?n.nextSibling:t.firstChild;r!==e&&t.insertBefore(e,r)}function j(e){return"single-spa-application:".concat(e)}function L(e){if("#text"===e.type.toLowerCase())return document.createTextNode(e.value);if("#comment"===e.type.toLowerCase())return document.createComment(e.value);var t=document.createElement(e.type);return(e.attrs||[]).forEach((function(e){t.setAttribute(e.name,e.value)})),t.routes&&t.routes.forEach((function(e){t.appendChild(L(e))})),t}function S(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:location)["hash"===e.mode?"hash":"pathname"]}function W(e){try{return new URL(e)}catch(n){var t=document.createElement("a");return t.href=e,t}}function I(t){var n=[],r=(0,e.checkActivityFunctions)(t?W(t):location);return(0,e.getAppNames)().forEach((function(e){r.indexOf(e)<0&&n.push(e)})),n}function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a(a({},e),t)}var M,D,k,H,R=function(e,t){if(e&&e.nodeName||"string"==typeof e){if(u&&!t&&window.singleSpaLayoutData&&(t=window.singleSpaLayoutData),"string"==typeof e){if(!u)throw Error("calling constructRoutes with a string on the server is not yet supported");if(!(e=(new DOMParser).parseFromString(e,"text/html").documentElement.querySelector("single-spa-router")))throw Error("constructRoutes should be called with a string HTML document that contains a <single-spa-router> element.")}e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("template"===e.nodeName.toLowerCase()&&(e=(e.content||e).querySelector("single-spa-router")),"single-spa-router"!==e.nodeName.toLowerCase())throw Error("single-spa-layout: The HTMLElement passed to constructRoutes must be <single-spa-router> or a <template> containing the router. Received ".concat(e.nodeName));u&&e.isConnected&&e.parentNode.removeChild(e);var n={routes:[],redirects:{}};w(e,"mode")&&(n.mode=w(e,"mode")),w(e,"base")&&(n.base=w(e,"base")),w(e,"containerEl")&&(n.containerEl=w(e,"containerEl"));for(var r=0;r<e.childNodes.length;r++){var o;(o=n.routes).push.apply(o,i(N(e.childNodes[r],t,n)))}return n}(e,t)}else if(t)throw Error("constructRoutes should be called either with an HTMLElement and layoutData, or a single json object.");return function(e){l("routesConfig",e);var t,n=e.disableWarnings;if(d("routesConfig",e,["mode","base","containerEl","routes","disableWarnings","redirects"],n),e.hasOwnProperty("containerEl")?function(e,t){if("string"==typeof t?""===t.trim():!(u&&t instanceof HTMLElement))throw Error("Invalid ".concat("routesConfig.containerEl",": received ").concat(t," but expected either non-blank string or HTMLElement"))}(0,e.containerEl):e.containerEl="body",e.hasOwnProperty("mode")||(e.mode="history"),function(e,t,n){if(n.indexOf(t)<0)throw Error("Invalid ".concat("routesConfig.mode",": received '").concat(t,"' but expected ").concat(n.join(", ")))}(0,e.mode,["history","hash"]),e.hasOwnProperty("base")?(f("routesConfig.base",e.base),e.base=(0!==(t=e.base).indexOf("/")&&(t="/"+t),"/"!==t[t.length-1]&&(t+="/"),t)):e.base="/",e.hasOwnProperty("redirects"))for(var r in l("routesConfig.redirects",e.redirects),e.redirects){var o=e.redirects[r];h("routesConfig.redirects key",r),h("routesConfig.redirects['".concat(r,"']"),o)}var a=u?window.location.pathname:"/",i="hash"===e.mode?a+"#":"";m("routesConfig.routes",e.routes,(function e(t,r,o){var a=o.parentPath,i=o.siblingActiveWhens,c=o.parentActiveWhen;if(l(r,t),"application"===t.type)d(r,t,["type","name","props","loader","error"],n),t.props&&l("".concat(r,".props"),t.props),f("".concat(r,".name"),t.name);else if("route"===t.type){d(r,t,["type","path","routes","props","default","exact"],n),t.hasOwnProperty("exact")&&p("".concat(r,".exact"),t.exact);var s,u=t.hasOwnProperty("path"),h=t.hasOwnProperty("default");if(u)f("".concat(r,".path"),t.path),s=v(a,t.path),t.activeWhen=g(s,t.exact),i.push(t.activeWhen);else{if(!h)throw Error("Invalid ".concat(r,": routes must have either a path or default property."));p("".concat(r,".default"),t.default),s=a,t.activeWhen=function(e,t){return function(n){return t(n)&&!e.some((function(e){return e(n)}))}}(i,c)}if(u&&h&&t.default)throw Error("Invalid ".concat(r,": cannot have both path and set default to true."));t.routes&&m("".concat(r,".routes"),t.routes,e,{parentPath:s,siblingActiveWhens:[],parentActiveWhen:t.activeWhen})}else{if("undefined"!=typeof Node&&t instanceof Node);else for(var y in t)"routes"!==y&&"attrs"!==y&&f("".concat(r,"['").concat(y,"']"),t[y],!1);t.routes&&m("".concat(r,".routes"),t.routes,e,{parentPath:a,siblingActiveWhens:i,parentActiveWhen:c})}}),{parentPath:i+e.base,parentActiveWhen:function(){return!0},siblingActiveWhens:[]}),delete e.disableWarnings}(e),e}('<single-spa-router>\n  \x3c!--\n\n    This is the single-spa Layout Definition for your microfrontends.\n    See https://single-spa.js.org/docs/layout-definition/ for more information.\n\n  --\x3e\n\n  \x3c!-- Example layouts you might find helpful:\n\n  <nav>\n    <application name="@org/navbar"></application>\n  </nav>\n  <route path="settings">\n    <application name="@org/settings"></application>\n  </route>\n\n  --\x3e\n\n  <main>\n    <route default>\n        <application name="@react-app"></application>\n        <application name="@angular-app"></application>\n    </route>\n  </main>\n</single-spa-router>'),_=(D=(M={routes:R,loadApp:function(e){var t=e.name;return System.import(t)}}).routes,k=M.loadApp,function e(t,n,r,o){o.forEach((function(o){"application"===o.type?(t[o.name]||(t[o.name]=[]),t[o.name].push({activeWhen:n,props:T(r,o.props),loader:o.loader})):"route"===o.type?e(t,o.activeWhen,T(r,o.props),o.routes):o.routes&&e(t,n,r,o.routes)}))}(H={},(function(){return!0}),{},D.routes),Object.keys(H).map((function(t){var n=H[t];return{name:t,customProps:function(e,t){var r=y(n,(function(e){return e.activeWhen(t)}));return r?r.props:{}},activeWhen:n.map((function(e){return e.activeWhen})),app:function(){var r;u&&(r=y(n,(function(e){return e.activeWhen(window.location)})));var o=k({name:t});return r&&r.loader?function(t,n,r){return Promise.resolve().then((function(){var o,a=j(t),i=document.getElementById(a);i||((i=document.createElement("div")).id=a,i.style.display="none",document.body.appendChild(i),o=function(){i.style.removeProperty("display"),""===i.getAttribute("style")&&i.removeAttribute("style"),window.removeEventListener("single-spa:before-mount-routing-event",o)},window.addEventListener("single-spa:before-mount-routing-event",o));var s="string"==typeof n.loader?x(n.loader):n.loader,u=(0,e.mountRootParcel)(s,{name:"application-loader:".concat(t),domElement:i});function l(){return u.unmount().then((function(){o&&o()}))}return Promise.all([u.mountPromise,r]).then((function(e){var t,n=function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),2!==n.length);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(t)||c(t,2)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();n[0];var r=n[1];return l().then((function(){return r}))}),(function(e){return l().then((function(){throw e}))}))}))}(t,r,o):o}}}))),B=function(n){var r=n.routes,o=n.active,a=void 0===o||o,i=!1,c={};if(!r)throw Error("single-spa-layout constructLayoutEngine(opts): opts.routes must be provided. Value was ".concat(t(r)));var s=r.base.slice(0,r.base.length-1),l={isActive:function(){return i},activate:function(){i||(i=!0,u&&(window.addEventListener("single-spa:before-routing-event",d),window.addEventListener("single-spa:before-mount-routing-event",f),window.addEventListener("single-spa:routing-event",h),(0,e.addErrorHandler)(p),f()))},deactivate:function(){i&&(i=!1,u&&(window.removeEventListener("single-spa:before-routing-event",d),window.removeEventListener("single-spa:before-mount-routing-event",f),window.removeEventListener("single-spa:routing-event",h),(0,e.removeErrorHandler)(p)))}};return a&&l.activate(),l;function p(t){var n=P({applicationName:t.appOrParcelName,location:window.location,routes:r.routes});if(n&&n.error){var o=document.getElementById(j(n.name)),a="string"==typeof n.error?x(n.error):n.error;c[n.name]=(0,e.mountRootParcel)(a,{domElement:o})}setTimeout((function(){throw t}))}function d(n){var o=n.detail,a=o.cancelNavigation,i=o.newUrl,s=S(r,W(i)),u=function(t){var n=r.redirects[t];if(t===s){if(!a)throw Error("single-spa-layout: <redirect> requires single-spa@>=5.7.0");return a(),setTimeout((function(){(0,e.navigateToUrl)(n)})),{v:void 0}}};for(var l in r.redirects){var p=u(l);if("object"===t(p))return p.v}var d=[];I(i).forEach((function(e){c[e]&&(d.push(c[e].unmount()),delete c[e])})),d.length>0&&(a(),Promise.all(d).then((function(){(0,e.navigateToUrl)(i)})))}function f(){if(0===S(r).indexOf(s)){var t="string"==typeof r.containerEl?document.querySelector(r.containerEl):r.containerEl,n=(0,e.getMountedApps)().reduce((function(e,t){return e[t]=document.getElementById(j(t)),e}),{});A({location:window.location,routes:r.routes,parentContainer:t,shouldMount:!0,applicationContainers:n})}}function h(e){var t=e.detail,n=t.navigationIsCanceled,r=t.newUrl;n||I(r).forEach((function(e){var t=document.getElementById(j(e));t&&t.isConnected&&t.parentNode.removeChild(t)}))}}({routes:R,applications:_});_.forEach(e.registerApplication),B.activate(),(0,e.start)()})(),{}})())}}}));
//# sourceMappingURL=SampleOrg-root-config.js.map