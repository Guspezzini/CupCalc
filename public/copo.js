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

eval("{// Espera o botão ser clicado para rodar a função\r\ndocument.getElementById('calcular').onclick = function() {\r\n\r\n    // 1. Pega os valores que você digitou nas caixinhas\r\n    let rMaior = document.getElementById('raioMaior').value\r\n    let rMenor = document.getElementById('raioMenor').value\r\n    let alt = document.getElementById('altura').value\r\n\r\n    // 2. Cria o objeto\r\n    let meuCopo = new copo(rMaior, rMenor, alt)\r\n\r\n    // 3. Coloca os resultados dentro das tags <p> do seu HTML\r\n    document.getElementById('geratriz').innerText = \"Geratriz (g): \" + meuCopo.calcularGeratriz().toFixed(2) + \" cm\"\r\n    document.getElementById('areaBaseMenor').innerText = \"Área Base Menor (Ab): \" + meuCopo.calcularAreaBaseMenor().toFixed(2) + \" cm²\"\r\n    document.getElementById('areaBaseMaior').innerText = \"Área Base Maior (AB): \" + meuCopo.calcularAreaBaseMaior().toFixed(2) + \" cm²\"\r\n    document.getElementById('areaLateral').innerText = \"Área Lateral (Al): \" + meuCopo.calcularAreaLateral().toFixed(2) + \" cm²\"\r\n    document.getElementById('areaTotal').innerText = \"Área Total (At): \" + meuCopo.calcularAreaTotal().toFixed(2) + \" cm²\"\r\n    document.getElementById('volume').innerText = \"Volume (V): \" + meuCopo.calcularVolume().toFixed(2) + \" ml\"\r\n    document.getElementById('classificacao').innerText = \"Classificação: \" + meuCopo.classificar()\r\n}\n\n//# sourceURL=webpack://copoatividade/./index.js?\n}");

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