// // criar um aplicativo de frases motivacionais

// // declaration or function statement
// function createPhrases() {
//     console.log('Paciência e persistência')
//     console.log('Revisão é a mãe do aprendizado')
// }

// // execute, run, call, invoke the function
// createPhrases()
// createPhrases()
// createPhrases()

// console.log('Fim do programa')


// // Argumentos e parâmetros

// // function expression
// // function annonymous (sem nome na função)

// // const sum = function(number1, number2) {
// //     console.log(`A soma é: ${number1 + number2}`)
// // }

// // sum(3, 4)
// // sum(30, 40)

// // using 'return'
// // caution with const, let and var!
// const sum = function(number1, number2) {
//     // total = number1 + number2
//     let total = number1 + number2
//     return total
// }

// let n1 = 45
// let n2 = 120

// console.log(`A soma é ${sum(n1, n2)}`)
// // console.log(total) // effect of 'let' inside the function creates a local scope for the variable 'total' .


// // function hoisting

// sayMyName()

// function sayMyName() {
//     console.log('Saul')
// }

// // no hoisting function

// // sayHello()

// // const sayHello = function () {
// //     console.log('Hello JavaScript!')
// // }

// // sayBye()

// const SayBye = function sayBye() {
//     console.log('Bye Bye hoisting!')
// }

// SayBye()
// // sayBye() // does not work


// // arrow function

// const sayMyName = (name) => {
//     console.log(name)
// }

// sayMyName('Saul P.')


// // callback function

// function sayMyName(name) {
//     name()
//     name()
//     name()
// }

// sayMyName(
//     () => {
//         console.log('Estou em uma callback')
//     }
// )


// // function() constructor

// function Person(name) {
//     this.name = name
//     this.walk = function() {
//         return this.name + " está andando"
//     }
// }

// const saul = new Person("Saul")
// const joao = new Person("João")
// console.log(saul)
// console.log(joao)
// console.log(saul.walk())
// console.log(joao.walk())

// // exemplos de funções construtoras

// let date = new Date("2023-11-01")
// console.log(date)

// let string = new String("Saul Paiva")
// console.log(string)

// let number = new Number(2023)
// console.log(number)