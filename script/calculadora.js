let text = ''
let valores = []
let verifica = true
const visor = document.querySelector('div#visor > p')

function arraystr(array) {
    let str = ''
    for (let i in array) {
        str += `${array[i]} `
    }
    return str
}

const up_visor = () => {visor.innerText = arraystr(valores).replace('.', ',') + text}

function adicionar(valor) {
    if (verifica && isNaN(valor)) {
        visor.innerHTML = '<strong>Formato usado inválido.</strong>'
        setTimeout(up_visor, 1500)
    } else if (valor == '+' || valor == '-' || valor == '×' || valor == '÷') {
        valores.push(Number(text.replace(',', '.')))
        valores.push(valor)
        text = ''
        verifica = true
        up_visor()
    } else if (valor == ',' && text.indexOf(',') == -1) {
        text += valor
        verifica = true
        up_visor()
    } else if (valor == 'C') {
        text = ''
        valores = []
        up_visor()
    } else if (!isNaN(valor)) {
        text += valor
        verifica = false
        up_visor()
    }
}

function calcular(array) {
    while (array.length > 1) {
        for (let i in array) {
            i = Number(i)
            if (array[i] == '+') {
                const soma = array[i-1] + array[i+1]
                array.splice(i-1, 3, soma)
            } else if (array[i] == '-') {
                const sub = array[i-1] - array[i+1]
                array.splice(i-1, 3, sub)
            } else if (array[i] == '×') {
                const multi = array[i-1] * array[i+1]
                array.splice(i-1, 3, multi)
            } else if (array[i] == '÷') {
                const div = array[i-1] / array[i+1]
                array.splice(i-1, 3, div)
            }
        }
    }
    return array[0]
}

function resultado() {
    valores.push(Number(text.replace(',', '.')))
    text = String(calcular(valores)).replace('.', ',')
    valores = []
    up_visor()
}