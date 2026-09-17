
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

    resposta.innerHTML = `Geratriz: ${calcGeratriz}<br>`
    resposta.innerHTML += `Área base menor: ${calcAreaBaseMenor}<br>`
    resposta.innerHTML += `Área base maior: ${calcAreaBaseMaior}<br>`
    resposta.innerHTML += `Área lateral: ${calcAreaLateral}<br>`
    resposta.innerHTML += `Área total: ${calcAreaTtal}<br>`
    resposta.innerHTML += `Volume: ${calcVolume}<br>`
    resposta.innerHTML += `Classificação: ${classificar}`
}