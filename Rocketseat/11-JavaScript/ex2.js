/***
 * Transformar notas escolares
 * 
 * Crie um algorítimo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C (conceito)
 * 
 * de 90 para cima -  A
 * entre 80 e 89   -  B
 * entre 70 e 79   -  C
 * entre 60 e 69   -  D
 * menor que 60    -  F
 * 
 */

function conceito(nota) {
    if (nota >= 0 && nota < 60) {
        console.log('Nota com conceito F')
    } else if (nota >= 60 && nota < 69) {
        console.log('Nota com conceito D')
    } else if (nota >= 70 && nota < 79) {
        console.log('Nota com conceito C')
    } else if (nota >= 80 && nota < 89) {
        console.log('Nota com conceito B')
    } else if (nota >= 90 && nota <= 100) {
        console.log('Nota com conceito A')
    } else {
        console.log('Insira uma nota de 0 à 100')
    }
}

conceito(100)