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

eval("{//const Copo = require(\"./Copo\")\r\ndocument.getElementById('calcular').onclick = function () {\r\n\r\n\r\n    let raioMaior = Number(document.getElementById('raioMaior').value)\r\n    let raioMenor = Number(document.getElementById('raioMenor').value)\r\n    let altura = Number(document.getElementById('altura').value)\r\n\r\n    console.log(raioMaior)\r\n    console.log(raioMenor)\r\n    console.log(altura)\r\n\r\n\r\n    let copo = new Copo(raioMaior, raioMenor, altura)\r\n\r\n    let resposta = document.getElementById(\"resposta\")\r\n\r\n    let calcGeratriz = copo.calcularGeratriz()\r\n    let calcAreaBaseMenor = copo.calcularAreaBaseMenor()\r\n    let calcAreaBaseMaior = copo.calcularAreaBaseMaior()\r\n    let calcAreaLateral = copo.calcularAreaLateral()\r\n    let calcAreaTtal = copo.calcularAreaTotal()\r\n    let calcVolume = copo.calcularVolume()\r\n    let classificar = copo.classificar()\r\n\r\n    resposta.innerHTML = `Geratriz: ${calcGeratriz}<br>`\r\n    resposta.innerHTML += `Área base menor: ${calcAreaBaseMenor}<br>`\r\n    resposta.innerHTML += `Área base maior: ${calcAreaBaseMaior}<br>`\r\n    resposta.innerHTML += `Área lateral: ${calcAreaLateral}<br>`\r\n    resposta.innerHTML += `Área total: ${calcAreaTtal}<br>`\r\n    resposta.innerHTML += `Volume: ${calcVolume}<br>`\r\n    resposta.innerHTML += `Classificação: ${classificar}`\r\n}\n\n//# sourceURL=webpack://copoatividade/./index.js?\n}");

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