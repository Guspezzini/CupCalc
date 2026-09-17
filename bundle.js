class copo {

    constructor(raioMaior, raioMenor, altura) {
    
        this.raioMaior = parseFloat(raioMaior)
        this.raioMenor = parseFloat(raioMenor)
        this.altura = parseFloat(altura)
    }

    calcularGeratriz() {
        return Math.sqrt(
            (this.raioMaior - this.raioMenor) ** 2 + this.altura ** 2
        )
    }

    calcularAreaBaseMenor() {
        return Math.PI * Math.pow(this.raioMenor, 2)
    }

    calcularAreaBaseMaior() {
        return Math.PI * Math.pow(this.raioMaior, 2)
    }

    calcularAreaLateral() {
        let geratriz = this.calcularGeratriz()
        return Math.PI * (this.raioMaior + this.raioMenor) * geratriz
    }

    calcularAreaTotal() {
        let areaBaseMenor = this.calcularAreaBaseMenor()
        let areaBaseMaior = this.calcularAreaBaseMaior()
        let areaLateral = this.calcularAreaLateral()

        return areaBaseMenor + areaBaseMaior + areaLateral
    }

    calcularVolume() {
        return (
            Math.PI *
            this.altura *
            (
                Math.pow(this.raioMaior, 2) +
                this.raioMaior * this.raioMenor +
                Math.pow(this.raioMenor, 2)
            )
        ) / 3
    }


    classificar() {
        let volume = this.calcularVolume()

        if (volume < 180) {
            return "Copo Dose (cafezinho)"
        } else if (volume <= 350) {
            return "Copo Padrao (agua / cha)"
        } else {
            return "Copo Grande (suco / refrigerante)"
        }
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = copo
}