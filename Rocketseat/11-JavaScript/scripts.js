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

// Summing the elements of each array and put in some variable

let despesafamily = 0;
for (let i in family.expenses) {
    despesafamily += family.expenses[i];
}

// console.log(despesafamily)

let receitafamily = 0;
for (let i in family.incomes) {
    receitafamily += family.incomes[i];
}

// console.log(receitafamily)

// Verificando o saldo restante

let balance = receitafamily - despesafamily;

if (balance > 0) {
    console.log('Saldo positivo de', balance)
} else if (balance < 0) {
    console.log('Saldo negativo de ', balance)
} else {
    console.log('Saldo igual à zero')
}