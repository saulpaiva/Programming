// // Conditionals and flux control


// // if ... else

// let temperature = 36.5

// if(temperature > 37.2) {
//     console.log('Febre')
// } else if(temperature < 36.1) {
//     console.log('Hipotermia')
// } else {
//     console.log('Saudável')
// }


// // switch

// let expression = 'c'

// switch (expression) {
//     case 'a':
//         // codigo para expression a
//         console.log('a')
//         break
//     case 'b':
//         // codigo para expression b
//         console.log('b')
//     default:
//         console.log('Default output')
//         break
// }

// // Temos também a calculadora que o professor construiu no vídeo:

// function calculate(number1, operator, number2) {
//     let result = 0;

//     switch (operator) {
//         case '+':
//             result = number1 + number2
//             break
//         case '-':
//             result = number1 - number2 
//             break
//         case '*':
//             result = number1 * number2
//             break
//         case '/':
//             result = number1 / number2 
//             break
//         default:
//             console.log('não implementado')
//             break
//     }

//     return result
// }

// console.log(calculate(4, '%', 8))


// // throw and try/catch

// function sayMyName(name = '') { // inicia o parâmetro name com '' caso nao receba nada de parâmetro pela função
//     if (name === '') {
//         throw new Error('Nome é obrigatório')
//     }

//     console.log(name)
// }

// try {
//     sayMyName()
//     // sayMyName('Saul')
// } catch(e) {
//     console.log(e)
// }

// console.log('após ao try/catch')