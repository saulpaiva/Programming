/*** Sistema de gastos familiar 
 * Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
 * 
 * receitas: [] 
 * despesas: []
 * 
 * Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.
 * 
 */

// Creating the object with two arrays

let family = {incomes: [1664.00,  500.00, 77.00], expenses: [299.00, 200, 89, 80, 30, 160, 350, 220]}


// Creating a summation function

function sum(array) {

    let total = 0;
    
    for (let i of array) {
        total += i;
    }

    return total;
}

// Summing the elements of each array and put in some variable

let expensesFamily = sum(family.expenses)

let incomesFamily = sum(family.incomes)

// console.log(expensesFamily)

// console.log(incomesFamily)

// Verificando o saldo restante

let balance = incomesFamily - expensesFamily;

if (balance > 0) {
    console.log(`Saldo positivo de R$ ${balance.toFixed(2)}`)
} else if (balance < 0) {
    console.log(`Saldo negativo de R$ ${balance.toFixed(2)}`)
} else {
    console.log(`Saldo igual à zero R$ ${balance.toFixed(2)}`)
}