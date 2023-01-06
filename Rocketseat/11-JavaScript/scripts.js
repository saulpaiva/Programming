// // var
// var clima = "Frio"
// console.log(clima)

// // let
// let fruta = "Abacaxi"
// console.log(fruta)

// // const
// const pi = 3.14
// // pi = 5
// console.log(pi)


// // Tipagem fraca e dinâmica

// let clima = "Frio"
// // clima = 0
// // clima = true

// console.log(typeof clima)


// // Scope

// // var é global e também local (hoisting)

// console.log('> existe x antes do bloco? ', x)
// {
//     var x = 100
// }
// console.log('> existe x depois do bloco? ', x)

// // hoisting
// var j
// console.log('> existe j antes do bloco? ', j)
// {
//     j = 150
// }
// console.log('> existe j depois do bloco? ', j)

// // let é local

// // console.log('> existe y antes do bloco? ', y)
// {
//     // console.log('> existe y antes? ', y)
//     let y = 200
//     console.log('> existe y depois? ', y)
// }
// // console.log('> existe y depois do bloco? ', y)

// O escopo atualiza o valor de z

// let z = 0;

// console.log('> valor de z no escopo global antes de atualizar no escopo local: ', z)

// {
//     z = 1
//     console.log('> atualiza o valor de z para 1 dentro do escopo local: ', z)
// }

// console.log('> valor de z no escopo global depois de atualizar no escopo local: ', z)

