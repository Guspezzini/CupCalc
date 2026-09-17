/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Copo.js"
/*!*****************!*\
  !*** ./Copo.js ***!
  \*****************/
(module) {

eval("{class Copo {\r\n\r\n    constructor(raioMaior, raioMenor, altura) {\r\n    \r\n        this.raioMaior = raioMaior\r\n        this.raioMenor = raioMenor\r\n        this.altura = altura\r\n    }\r\n\r\n    calcularGeratriz() {\r\n        return Math.sqrt(this.raioMaior - this.raioMenor) ** 2 + this.altura ** 2\r\n    }\r\n\r\n    calcularAreaBaseMenor() {\r\n        return Math.PI * Math.pow(this.raioMenor, 2)\r\n    }\r\n\r\n    calcularAreaBaseMaior() {\r\n        return Math.PI * Math.pow(this.raioMaior, 2)\r\n    }\r\n\r\n    calcularAreaLateral() {\r\n        let geratriz = this.calcularGeratriz()\r\n        return Math.PI * (this.raioMaior + this.raioMenor) * geratriz\r\n    }\r\n\r\n    calcularAreaTotal() {\r\n        let areaBaseMenor = this.calcularAreaBaseMenor()\r\n        let areaBaseMaior = this.calcularAreaBaseMaior()\r\n        let areaLateral = this.calcularAreaLateral()\r\n\r\n        return areaBaseMenor + areaBaseMaior + areaLateral\r\n    }\r\n\r\n    calcularVolume() {\r\n        return (\r\n            Math.PI * this.altura * (Math.pow(this.raioMaior, 2) + this.raioMaior * this.raioMenor + Math.pow(this.raioMenor, 2))) / 3\r\n    }\r\n\r\n\r\n    classificar() {\r\n        let volume = this.calcularVolume()\r\n\r\n        if (volume < 180) {\r\n            return \"Copo Dose (cafezinho)\"\r\n        } else if (volume <= 350) {\r\n            return \"Copo Padrao (agua / cha)\"\r\n        } else {\r\n            return \"Copo Grande (suco / refrigerante)\"\r\n        }\r\n    }\r\n}\r\nif ( true && module.exports) {\r\n    module.exports = Copo\r\n}\n\n//# sourceURL=webpack://copoatividade/./Copo.js?\n}");

/***/ },

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{\r\nconst Copo = __webpack_require__(/*! ./Copo */ \"./Copo.js\")\r\ndocument.getElementById('calcular').onclick = function () {\r\n\r\n\r\n    let raioMaior = Number(document.getElementById('raioMaior').value)\r\n    let raioMenor = Number(document.getElementById('raioMenor').value)\r\n    let altura = Number(document.getElementById('altura').value)\r\n\r\n    console.log(raioMaior)\r\n    console.log(raioMenor)\r\n    console.log(altura)\r\n\r\n\r\n    let copo = new Copo(raioMaior, raioMenor, altura)\r\n\r\n    let resposta = document.getElementById(\"resposta\")\r\n\r\n    let calcGeratriz = copo.calcularGeratriz()\r\n    let calcAreaBaseMenor = copo.calcularAreaBaseMenor()\r\n    let calcAreaBaseMaior = copo.calcularAreaBaseMaior()\r\n    let calcAreaLateral = copo.calcularAreaLateral()\r\n    let calcAreaTtal = copo.calcularAreaTotal()\r\n    let calcVolume = copo.calcularVolume()\r\n    let classificar = copo.classificar()\r\n\r\n    resposta.innerHTML = `Geratriz: ${calcGeratriz}<br>`\r\n    resposta.innerHTML += `Área base menor: ${calcAreaBaseMenor}<br>`\r\n    resposta.innerHTML += `Área base maior: ${calcAreaBaseMaior}<br>`\r\n    resposta.innerHTML += `Área lateral: ${calcAreaLateral}<br>`\r\n    resposta.innerHTML += `Área total: ${calcAreaTtal}<br>`\r\n    resposta.innerHTML += `Volume: ${calcVolume}<br>`\r\n    resposta.innerHTML += `Classificação: ${classificar}`\r\n}\n\n//# sourceURL=webpack://copoatividade/./index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;