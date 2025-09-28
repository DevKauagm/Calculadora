const header = document.querySelector('header')
const calculadora = document.getElementById('calculadora')
const botao = document.querySelectorAll('main > .botao > p')

function tema(tema) {
    switch(tema) {
        case 'claro':
            header.style.backgroundColor = 'var(--cor4)'
            document.body.style.backgroundImage = 'linear-gradient(120deg, var(--cor4), var(--cor5), var(--cor6))'
            calculadora.style.backgroundColor = 'var(--cor1)'
            botao.forEach(p => {p.style.color = 'var(--cor2)'})
            break
        case 'escuro':
            header.style = ''
            document.body.style = ''
            calculadora.style = ''
            botao.forEach(p => {p.style = ''})
    }
}