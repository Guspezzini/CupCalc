
document.getElementById('calcular').onclick = function () {


    let raioMaior = document.getElementById('raioMaior').value
    let raioMenor = document.getElementById('raioMenor').value
    let altura = document.getElementById('altura').value


    let meuCopo = new copo(raioMaior, raioMenor, altura)

    document.getElementById('geratriz').innerText = "valor da geratriz (g): " + meuCopo.calcularGeratriz().toFixed(2) + " cm"
        document.getElementById('areaBaseMenor').innerText = "area da base menor (Ab): " + meuCopo.calcularAreaBaseMenor().toFixed(2) + " cm²"
            document.getElementById('areaBaseMaior').innerText = "area da base maior (AB): " + meuCopo.calcularAreaBaseMaior().toFixed(2) + " cm²"
                 document.getElementById('areaLateral').innerText = "area da lateral (Al): " + meuCopo.calcularAreaLateral().toFixed(2) + " cm²"
                    document.getElementById('areaTotal').innerText = "valor da area Total (At): " + meuCopo.calcularAreaTotal().toFixed(2) + " cm²"
                        document.getElementById('volume').innerText = "volume (V): " + meuCopo.calcularVolume().toFixed(2) + " ml"
                            document.getElementById('classificacao').innerText = "Classificação: " + meuCopo.classificar()
}