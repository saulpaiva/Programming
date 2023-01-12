<!-- Notas retiradas do site https://rocketseat.com.br -->

# JavaScript

Neste curso vamos falar sobre o JavaScript Core, que é o JavaScript puro, sem nenhum framework. JavaScript é uma linguagem de programação que roda no navegador do usuário, e pode rodar no computador com algumas aplicações que serão citadas em seguida no curso. Com o JavaScript podemos criar aplicações web, mobile com React Native, e desktop com Electron. Neste curso vamos entender conceitos e fundamentos, praticaremos eles e depois revisaremos.

## Maneiras de executar o JavaScript


Nesta aula vamos citar 3 maneiras de executar códigos em JavaScript, a primeira maneira é pelo navegador, clicando na tecla F12 em qualquer website o menu do DevTools, que são ferramentas para desenvolvedores, na aba console podemos executar código JavaScript. A segunda forma é pela aplicação web CodePen, abrindo o endereço codepen.io/pen você encontra um ambiente que se pode utilizar codigo HTML, CSS e JavaScript. Também pode-se usar o Visual Studio Code, criando um arquivo HTML com a tag < script > e colocando o código dentro.

## Comentários

Para comentar seu código no Javascript, pode se usar // antes da linha, para definir aquela linha inteira, para comentar mais de uma linha, pode se usar um /* no começo do comentário e um */ no final. Comentários não são executados, mas são mostrados para quem visualiza o código.

## Tipos de dados

Conforme o ECMAScript Standard (o padrão do orgão que padroniza o JavaScript) temos 9 tipos de dados organizados em 4 categorias: Primitive, Primitive Value, Structural e Structural Primitive. Os primitivos são: String, Number, Boolean, Undefined, Symbol, BigInt. Os estruturais são: Object e Function. Além destes, temos o primitivo estrutural que consiste apenas no dado null

## Variáveis

Para entender variáveis podemos pensar nelas como nomes simbólicos para algum valor, atalhos de código ou identificadores. Para criar uma variável, podemos usar uma das palavras reservadas: var, let e const, por exemplo: var clima = "quente", onde var é a palavra que simboliza a criação da variável, clima é o nome da variável, o sinal de igual denota que a variável está recebendo um valor e "quente" é a string que está sendo recebida. As variáveis declaradas com "var" e "let" podem ter seu valor mudado, já a const não.

## Tipos dinâmicos

O JavaScript é uma linguagem fracamente tipada e dinâmica, ou seja, ao declarar uma variável não é necessário estabelecer um tipo específico e o tipo do valor da variável pode mudar conforme o código.

## Scope e var

O Scope ou Escopo determina a visibilidade de uma variável em um código, e para entender scope precisamos primeiramente entender block statement, que é o código presente dentro de chaves. O escopo do var é global, ou seja, uma variável declarada com var poderá ser usada em todo o código.

## Nomes de variáveis

- JS é case-sensitive
- JS aceita a cadeia de caracteres Unicode

- Posso:
    - Iniciar com esses caracteres especiais: $ _
    - Iniciar com letras
    - Colocar acentos
    - Letras maiúsculas e minúsculas fazem diferença

- Não posso:
    - Iniciar com números
    - Colocar espaços vazios no nome

- Ideal:
    - Criar nomes que façam sentido
    - Autoexplicativo quanto à função da variável e o que ela é
    - camelCase
    - snake_case
    - Escrever em inglês

## Objects

Para criarmos um objeto utilizamos as chaves envolvendo as propriedades, que são atribuídas com dois pontos, por exemplo: const person = { name: 'John', age: 20 }, para acessar essas propriedades usamos o ".", por exemplo: 

```javascript
console.log(person.name)
```

## Functions

Funções são tipos de dados estruturais, que são declarados dessa forma: function nomeFunção() { código à cer executado } e para executar a função, usa-se: nomeFunção(). Uma função é importante para o agrupamento e reutilização de código.

## Argumentos e parâmetros

Também é possível declarar funções dentro de variáveis, desta maneira: const variavel = function() {}. Uma parte importante de funções são os parâmetros, que são similares variáveis que funcionam para colocar dados em funções, eles são declarados junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses.

## Callback function

Uma callback function é uma função que está sendo passada para outra função como parâmetro.