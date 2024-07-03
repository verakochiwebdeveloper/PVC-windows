/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/popup */ \"./modules/popup.js\");\n/* harmony import */ var _modules_popupServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/popupServices */ \"./modules/popupServices.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_sliderServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sliderServices */ \"./modules/sliderServices.js\");\n/* harmony import */ var _modules_discountsTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/discountsTime */ \"./modules/discountsTime.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_popupServices__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_sliderServices__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_discountsTime__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/discountsTime.js":
/*!**********************************!*\
  !*** ./modules/discountsTime.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst discountsTime = () => {\r\n    \r\n    function updateTimer() {\r\n        const countdown = document.querySelector('.countdown');\r\n        const days = countdown.getAttribute('data-days');\r\n        const spans = countdown.querySelectorAll('span');\r\n    \r\n        const now = new Date();\r\n        const targetDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);\r\n    \r\n        const timeLeft = targetDate - now;\r\n        const seconds = Math.floor((timeLeft / 1000) % 60);\r\n        const minutes = Math.floor((timeLeft / 1000 / 60) % 60);\r\n        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);\r\n        const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));\r\n    \r\n        spans[0].textContent = daysLeft.toString().padStart(2, '0');\r\n        spans[1].textContent = hours.toString().padStart(2, '0');\r\n        spans[2].textContent = minutes.toString().padStart(2, '0');\r\n        spans[3].textContent = seconds.toString().padStart(2, '0');\r\n    }\r\n    \r\n    setInterval(updateTimer, 1000);\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (discountsTime);\n\n//# sourceURL=webpack:///./modules/discountsTime.js?");

/***/ }),

/***/ "./modules/popup.js":
/*!**************************!*\
  !*** ./modules/popup.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popup = () => {\r\n    document.addEventListener('DOMContentLoaded', function() {\r\n        const openModalButton = document.querySelector('.button');\r\n        const closeModalButton = document.querySelector('.header-modal__close');\r\n        const overlay = document.querySelector('.overlay');\r\n        const modal = document.querySelector('.header-modal');\r\n    \r\n        function openModal() {\r\n            overlay.style.display = 'block';\r\n            modal.style.display = 'block';\r\n        }\r\n    \r\n        function closeModal() {\r\n            overlay.style.display = 'none';\r\n            modal.style.display = 'none';\r\n        }\r\n    \r\n        function closeOnOverlayClick(event) {\r\n            if (event.target === overlay) {\r\n                closeModal();\r\n            }\r\n        }\r\n    \r\n        openModalButton.addEventListener('click', openModal);\r\n        closeModalButton.addEventListener('click', closeModal);\r\n        overlay.addEventListener('click', closeOnOverlayClick);\r\n    });\r\n    \r\n    \r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\n\n//# sourceURL=webpack:///./modules/popup.js?");

/***/ }),

/***/ "./modules/popupServices.js":
/*!**********************************!*\
  !*** ./modules/popupServices.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popupServices = () => {\r\n    document.addEventListener('DOMContentLoaded', function() {\r\n        const openModalButtons = document.querySelectorAll('.service-button');\r\n        const closeModalButton = document.querySelector('.services-modal__close');\r\n        const overlay = document.querySelector('.overlay');\r\n        const modal = document.querySelector('.services-modal');\r\n\r\n        function openModal() {\r\n            overlay.style.display = 'block';\r\n            modal.style.display = 'block';\r\n        }\r\n\r\n        function closeModal() {\r\n            overlay.style.display = 'none';\r\n            modal.style.display = 'none';\r\n        }\r\n\r\n        function closeOnOverlayClick(event) {\r\n            if (event.target === overlay) {\r\n                closeModal();\r\n            }\r\n        }\r\n\r\n        openModalButtons.forEach(button => {\r\n            button.addEventListener('click', openModal);\r\n        });\r\n\r\n        closeModalButton.addEventListener('click', closeModal);\r\n        overlay.addEventListener('click', closeOnOverlayClick);\r\n    });\r\n};\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupServices);\n\n//# sourceURL=webpack:///./modules/popupServices.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    document.addEventListener('DOMContentLoaded', function() {\r\n        const slides = document.querySelectorAll('.slide');\r\n        let currentSlide = 0;\r\n    \r\n        function showSlide(index) {\r\n            slides.forEach((slide, i) => {\r\n                if (i >= index && i < index + 3) {\r\n                    slide.style.display = 'block';\r\n                } else {\r\n                    slide.style.display = 'none';\r\n                }\r\n            });\r\n        }\r\n    \r\n        function nextSlide() {\r\n            currentSlide = (currentSlide + 1) % (slides.length - 2);\r\n            showSlide(currentSlide);\r\n        }\r\n    \r\n        function prevSlide() {\r\n            currentSlide = (currentSlide - 1 + slides.length - 2) % (slides.length - 2);\r\n            showSlide(currentSlide);\r\n        }\r\n    \r\n        document.querySelector('.next').addEventListener('click', nextSlide);\r\n        document.querySelector('.prev').addEventListener('click', prevSlide);\r\n    \r\n        showSlide(currentSlide);\r\n    });\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/sliderServices.js":
/*!***********************************!*\
  !*** ./modules/sliderServices.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderServices = () => {\r\n    document.addEventListener('DOMContentLoaded', function() {\r\n        const slides = document.querySelectorAll('.slide-service');\r\n        let currentSlide = 0;\r\n    \r\n        function showSlide(index) {\r\n            slides.forEach((slide, i) => {\r\n                if (i >= index && i < index + 2) {\r\n                    slide.style.display = 'block';\r\n                } else {\r\n                    slide.style.display = 'none';\r\n                }\r\n            });\r\n        }\r\n    \r\n        function nextSlide() {\r\n            currentSlide = (currentSlide + 1) % (slides.length - 1);\r\n            showSlide(currentSlide);\r\n        }\r\n    \r\n        function prevSlide() {\r\n            currentSlide = (currentSlide - 1 + slides.length - 1) % (slides.length - 1);\r\n            showSlide(currentSlide);\r\n        }\r\n    \r\n        document.querySelector('.services__arrow--left').addEventListener('click', nextSlide);\r\n        document.querySelector('.services__arrow--right').addEventListener('click', prevSlide);\r\n    \r\n        showSlide(currentSlide);\r\n    });\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderServices);\n\n//# sourceURL=webpack:///./modules/sliderServices.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;