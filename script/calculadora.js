let text = ''
let valores = []
let c = 0
const visor = document.querySelector('div#visor > p')

function arraystr(array) {
    let str = ''
    for (let i in array) {
        str += `${array[i]} `
    }
    return str
}

function adicionar(valor) {
    c++
    if (valor == '+' || valor == '-' || valor == '×' || valor == '÷') {
        if (c == 1) {
            alert('[ERRO] digite um número primeiro!')
            c = 0
        } else {
            if (text.length == 0){
                alert('digite um número primeiro!')
            } else {
                valores.push(Number(text.replace(',', '.')))
                valores.push(valor)
            }
            text = ''
        }
    } else if (valor == 'C') {
        text = ''
        valores = []
    } else {
        text += valor
    }
    visor.innerText = arraystr(valores).replace('.', ',') + text
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
    if (text.length == 0) {
        alert('formato inválido!')
    } else {
        valores.push(Number(text.replace(',', '.')))
        text = String(calcular(valores))
        valores = []
        visor.innerText = text
    }
}