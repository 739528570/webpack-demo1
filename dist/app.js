/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/a.js
const sum = (a, b) => a + b;
;// CONCATENATED MODULE: ./src/a.jpg
/* harmony default export */ var a = (__webpack_require__.p + "a.e04c12.jpg");
;// CONCATENATED MODULE: ./src/img.js

function packImg () {
    const oEle = document.createElement("div")
    const oImg = document.createElement("img")
    oImg.width = 800
    oImg.height = 600
    // oImg.src = require("./img.jpg").default
    // es5后require导入为对象
    // oImg.src = require("./img.jpg")
    // 需要在webpack.config => file-loader => options => esModule: false 不转换esModule
    oImg.src = a
    oEle.appendChild(oImg)

    return oEle
}
/* harmony default export */ var img = (packImg);
;// CONCATENATED MODULE: ./src/index.js





document.body.appendChild(img())

console.log(sum(111, 666))
/******/ })()
;