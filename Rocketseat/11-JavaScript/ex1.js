// exercise 1

// 1. Declare (sem atribuir nenhum valor) uma variável de nome weight

let weight
// weight = 70

// 2. Que tipo de dado é a variável acima?

console.log(typeof weight)

/*
3. Declare uma variável e atribua valores para cada um dos dados:
    - name: String
    - age: Number (integer)
    - stars: Number (float)
    - isSubscribed: Boolean
*/

let name = 'Heisemberg'
let age = 52
let stars = 99.0
let weigh = 85
let isSubscribed = true

/*
4. A variável student abaixo é de que tipo de dados?

4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> , <age> e <weight> pelos valores de cada propriedade do objeto.
*/

let student = {
    name: 'Heisemberg',
    age: 52,
    stars: 99.0,
    weight: 85,
    isSubscribed: true,
}

console.log(student)

console.log(typeof student)

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/**
 * 5. Declare uma variável do tipo Array, de nome students e atrubua a ela nenhum valor, ou seja, somente o Array vazio. 
 */

let students = []

/**
 * 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
 */

students = [
    student
]

console.log(students)

/**
 * 7. Coloque no console o valor da posição zero do Array acima
 */

console.log(students[0])

/**
 * Crie um novo student e coloque na posição 1 do Array students
 */

let student2 = {
    name: 'Juanito',
    age: 7,
    weight: 30,
}

// students = [
//     student,
//     student2,
// ]

// Forma alternativa:

students[1] = student2

console.log(students)

/**
 * 9. Sem rodar o código, responda qual é a resposta do código abaixo e porquê. Após sua resposta, rode o código e veja se você aceertou.
 */

console.log(a)
var a = 1
console.log(a)