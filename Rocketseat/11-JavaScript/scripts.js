/** Celsius to Fahrenheit
 * 
 * Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra
 * 
 * C = (F - 32) * 5/9 
 * F = C * 9/5 + 32
 * 
*/

// transform degrees



function transformDegrees(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExistis = degree.toUpperCase().includes('F')
    const kelvinExistis = degree.toUpperCase().includes('K')
    
    if(!celsiusExists && !fahrenheitExistis && !kelvinExistis) {
        throw new Error(`Grau não identificado de '${degree}' `)
    }
}

// try {
//     transformDegrees('50F')
//     transformDegrees('50X')
// } catch (error) {
//     console.log(error.message)
// }