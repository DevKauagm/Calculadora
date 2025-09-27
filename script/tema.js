const header = document.querySelector('header')
const calculadora = document.getElementById('calculadora')

function tema(tema) {
    switch(tema) {
        case 'claro':
            header.style.backgroundColor = 'var(--cor4)'
            calculadora.style.backgroundImage = 'linear-gradient(120deg, var(--cor4), var(--cor5), var(--cor6))'
            document.body.style.backgroundImage = 'linear-gradient()'
            break
        case 'escuro':
            header.style = ''
            calculadora.style = ''
    }
}