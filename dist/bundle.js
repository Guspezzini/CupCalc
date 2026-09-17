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

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
() {

eval("{\r\ndocument.getElementById('calcular').onclick = function () {\r\n\r\n\r\n    let raioMaior = document.getElementById('raioMaior').value\r\n    let raioMenor = document.getElementById('raioMenor').value\r\n    let altura = document.getElementById('altura').value\r\n\r\n\r\n    let meuCopo = new copo(raioMaior, raioMenor, altura)\r\n\r\n    document.getElementById('geratriz').innerText = \"valor da geratriz (g): \" + meuCopo.calcularGeratriz().toFixed(2) + \" cm\"\r\n        document.getElementById('areaBaseMenor').innerText = \"area da base menor (Ab): \" + meuCopo.calcularAreaBaseMenor().toFixed(2) + \" cm²\"\r\n            document.getElementById('areaBaseMaior').innerText = \"area da base maior (AB): \" + meuCopo.calcularAreaBaseMaior().toFixed(2) + \" cm²\"\r\n                 document.getElementById('areaLateral').innerText = \"area da lateral (Al): \" + meuCopo.calcularAreaLateral().toFixed(2) + \" cm²\"\r\n                    document.getElementById('areaTotal').innerText = \"valor da area Total (At): \" + meuCopo.calcularAreaTotal().toFixed(2) + \" cm²\"\r\n                        document.getElementById('volume').innerText = \"volume (V): \" + meuCopo.calcularVolume().toFixed(2) + \" ml\"\r\n                            document.getElementById('classificacao').innerText = \"Classificação: \" + meuCopo.classificar()\r\n}\n\n//# sourceURL=webpack://copoatividade/./index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;