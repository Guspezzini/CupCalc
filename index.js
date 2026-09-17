
const Copo = require("./Copo")
document.getElementById('calcular').onclick = function () {


    let raioMaior = Number(document.getElementById('raioMaior').value)
    let raioMenor = Number(document.getElementById('raioMenor').value)
    let altura = Number(document.getElementById('altura').value)

    console.log(raioMaior)
    console.log(raioMenor)
    console.log(altura)


    let copo = new Copo(raioMaior, raioMenor, altura)

    let resposta = document.getElementById("resposta")

    let calcGeratriz = copo.calcularGeratriz()
    let calcAreaBaseMenor = copo.calcularAreaBaseMenor()
    let calcAreaBaseMaior = copo.calcularAreaBaseMaior()
    let calcAreaLateral = copo.calcularAreaLateral()
    let calcAreaTtal = copo.calcularAreaTotal()
    let calcVolume = copo.calcularVolume()
    let classificar = copo.classificar()

resposta.innerHTML = `Geratriz: ${calcGeratriz.toFixed(2)}cm<br>`
resposta.innerHTML += `Área base menor: ${calcAreaBaseMenor.toFixed(2)}cm²<br>`
resposta.innerHTML += `Área base maior: ${calcAreaBaseMaior.toFixed(2)}cm²<br>`
resposta.innerHTML += `Área lateral: ${calcAreaLateral.toFixed(2)}cm²<br>`
resposta.innerHTML += `Área total: ${calcAreaTtal.toFixed(2)}cm²<br>`
resposta.innerHTML += `Volume: ${calcVolume.toFixed(2)}mL<br>`
resposta.innerHTML += `Classificação: ${classificar}`
}