/** Celsius to Fahrenheit
 * 
 * Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra
 * 
 * C = (F - 32) * 5/9 
 * F = C * 9/5 + 32
 * K = C + 273.15
 * 
*/

// transform degrees

let temp = '25 k'

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')
    const kelvinExists = degree.toUpperCase().includes('K')
    
    // fluxo de erro
    if(!celsiusExists && !fahrenheitExists && !kelvinExists) {
        throw new Error(`Grau não identificado de '${degree}' `)
    }

if (celsiusExists) {

    let updatedDegree = Number(degree.toUpperCase().replace("C",""));
    let formula = (celsius) => (celsius * 9/5) + 32
    let degreeSign = ' F'

    convertedDegree = formula(updatedDegree).toFixed(2) + degreeSign
    return `${degree.toUpperCase()} = ${convertedDegree}` 

} else if (fahrenheitExists) {

    let updatedDegree = Number(degree.toUpperCase().replace("F",""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = ' C'

    convertedDegree = formula(updatedDegree).toFixed(2) + degreeSign
    return `${degree.toUpperCase()} = ${convertedDegree}` 

} else {
    
    let updatedDegree = Number(degree.toUpperCase().replace("K",""));
    let formula = (kelvin) => ( (kelvin - 273.15) - 32) * 5/9
    let degreeSign = ' F'

    convertedDegree = formula(updatedDegree).toFixed(2) + degreeSign
    return `${degree.toUpperCase()} = ${(updatedDegree + 237.15).toFixed(2)} C = ${convertedDegree}` 

}

}

try {
    console.log(transformDegree(temp))
} catch (error) {
    console.log(error.message)
}