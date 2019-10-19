(window["webpackJsonpjavascript-gpgpu"] = window["webpackJsonpjavascript-gpgpu"] || []).push([[0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"grid":"styles_grid__1Zp-5"};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "5e614bfba70368257bf1.worker.js");
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "268f479d3c772a8dbb3c.worker.js");
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(1);

// EXTERNAL MODULE: ./src/CompletionGrid/Base/styles.module.css
var styles_module = __webpack_require__(4);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// CONCATENATED MODULE: ./src/CompletionGrid/Base/index.tsx
var Base_CompletionCell=function CompletionCell(_ref){var completed=_ref.completed;return react_default.a.createElement("div",{style:{color:completed?'green':'red'}},completed?"✔":"❓");};var Base_CompletionGrid=function CompletionGrid(_ref2){var completedCount=_ref2.completedCount,totalCount=_ref2.totalCount;return react_default.a.createElement("div",{className:styles_module_default.a.grid},Array(completedCount).fill(0).map(function(_,i){return react_default.a.createElement(Base_CompletionCell,{completed:true,key:i});}),Array(totalCount-completedCount).fill(0).map(function(_,i){return react_default.a.createElement(Base_CompletionCell,{key:i});}));};
// CONCATENATED MODULE: ./src/CompletionGrid/BaseWorker/index.tsx
var BaseWorker_CompletionGridWorker=function CompletionGridWorker(_ref){var isStarted=_ref.isStarted,setDone=_ref.setDone,Worker=_ref.Worker;var _useState=Object(react["useState"])(0),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),completedCount=_useState2[0],updateCount=_useState2[1];var _useState3=Object(react["useState"])(),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),worker=_useState4[0],setWorker=_useState4[1];Object(react["useEffect"])(function(){if(isStarted&&!worker){var _worker=new Worker();updateCount(0);_worker.postMessage("start");setWorker(_worker);}else if(!isStarted&&worker){worker.terminate();setWorker(undefined);}},[Worker,worker,isStarted]);Object(react["useEffect"])(function(){if(worker)worker.onmessage=function(){return updateCount(function(completedCount){return completedCount+1;});};},[worker]);Object(react["useEffect"])(function(){if(completedCount===100)setDone();},[setDone,completedCount]);return react_default.a.createElement(Base_CompletionGrid,{completedCount:completedCount,totalCount:100});};/* harmony default export */ var BaseWorker = (BaseWorker_CompletionGridWorker);
// EXTERNAL MODULE: ./src/workers/gpuworker.worker.ts
var gpuworker_worker = __webpack_require__(5);
var gpuworker_worker_default = /*#__PURE__*/__webpack_require__.n(gpuworker_worker);

// EXTERNAL MODULE: ./src/workers/worker.worker.ts
var worker_worker = __webpack_require__(6);
var worker_worker_default = /*#__PURE__*/__webpack_require__.n(worker_worker);

// EXTERNAL MODULE: ./src/App.css
var src_App = __webpack_require__(13);

// CONCATENATED MODULE: ./src/App.tsx
var App_App=function App(){var _useState=Object(react["useState"])(false),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),isStarted=_useState2[0],setIsStarted=_useState2[1];var _useState3=Object(react["useState"])(0),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),workersCompleted=_useState4[0],setWorkersCompleted=_useState4[1];var start=Object(react["useCallback"])(function(){setIsStarted(true);setWorkersCompleted(0);},[]);var stop=Object(react["useCallback"])(function(){setIsStarted(false);setWorkersCompleted(0);},[]);var setDone=Object(react["useCallback"])(function(){setWorkersCompleted(function(state){return state+1;});},[]);Object(react["useEffect"])(function(){if(workersCompleted==2)stop();},[stop,workersCompleted]);return react_default.a.createElement("header",{className:"root"},react_default.a.createElement("h1",null,"Demo"),react_default.a.createElement("button",{onClick:isStarted?stop:start},isStarted?"Stop":"Start"),react_default.a.createElement("div",{className:"demo-container"},react_default.a.createElement("div",{className:"grid-wrapper"},react_default.a.createElement("h2",null,"Vanilla Javascript"),react_default.a.createElement(BaseWorker,{isStarted:isStarted,setDone:setDone,Worker:worker_worker_default.a})),react_default.a.createElement("div",{className:"grid-wrapper"},react_default.a.createElement("h2",null,"Uses the GPU"),react_default.a.createElement(BaseWorker,{isStarted:isStarted,setDone:setDone,Worker:gpuworker_worker_default.a}))));};/* harmony default export */ var src_App_0 = (App_App);
// CONCATENATED MODULE: ./src/serviceWorker.ts
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost=Boolean(window.location.hostname==='localhost'||// [::1] is the IPv6 localhost address.
window.location.hostname==='[::1]'||// 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function register(config){if( true&&'serviceWorker'in navigator){// The URL constructor is available in all browsers that support SW.
var publicUrl=new URL("/javascript-gpgpu-demo",window.location.href);if(publicUrl.origin!==window.location.origin){// Our service worker won't work if PUBLIC_URL is on a different origin
// from what our page is served on. This might happen if a CDN is used to
// serve assets; see https://github.com/facebook/create-react-app/issues/2374
return;}window.addEventListener('load',function(){var swUrl="".concat("/javascript-gpgpu-demo","/service-worker.js");if(isLocalhost){// This is running on localhost. Let's check if a service worker still exists or not.
checkValidServiceWorker(swUrl,config);// Add some additional logging to localhost, pointing developers to the
// service worker/PWA documentation.
navigator.serviceWorker.ready.then(function(){console.log('This web app is being served cache-first by a service '+'worker. To learn more, visit https://bit.ly/CRA-PWA');});}else{// Is not localhost. Just register service worker
registerValidSW(swUrl,config);}});}}function registerValidSW(swUrl,config){navigator.serviceWorker.register(swUrl).then(function(registration){registration.onupdatefound=function(){var installingWorker=registration.installing;if(installingWorker==null){return;}installingWorker.onstatechange=function(){if(installingWorker.state==='installed'){if(navigator.serviceWorker.controller){// At this point, the updated precached content has been fetched,
// but the previous service worker will still serve the older
// content until all client tabs are closed.
console.log('New content is available and will be used when all '+'tabs for this page are closed. See https://bit.ly/CRA-PWA.');// Execute callback
if(config&&config.onUpdate){config.onUpdate(registration);}}else{// At this point, everything has been precached.
// It's the perfect time to display a
// "Content is cached for offline use." message.
console.log('Content is cached for offline use.');// Execute callback
if(config&&config.onSuccess){config.onSuccess(registration);}}}};};}).catch(function(error){console.error('Error during service worker registration:',error);});}function checkValidServiceWorker(swUrl,config){// Check if the service worker can be found. If it can't reload the page.
fetch(swUrl).then(function(response){// Ensure service worker exists, and that we really are getting a JS file.
var contentType=response.headers.get('content-type');if(response.status===404||contentType!=null&&contentType.indexOf('javascript')===-1){// No service worker found. Probably a different app. Reload the page.
navigator.serviceWorker.ready.then(function(registration){registration.unregister().then(function(){window.location.reload();});});}else{// Service worker found. Proceed as normal.
registerValidSW(swUrl,config);}}).catch(function(){console.log('No internet connection found. App is running in offline mode.');});}function unregister(){if('serviceWorker'in navigator){navigator.serviceWorker.ready.then(function(registration){registration.unregister();});}}
// CONCATENATED MODULE: ./src/index.tsx
react_dom_default.a.render(react_default.a.createElement(src_App_0,null),document.getElementById('root'));// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();

/***/ })
],[[7,1,2]]]);
//# sourceMappingURL=main.e89a99e4.chunk.js.map