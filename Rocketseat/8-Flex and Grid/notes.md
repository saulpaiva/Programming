# Page Layouts

- Tables
- Floats e clear
- Frameworks e Grid Systems
- Flexbox
- Grid

## Posicionamentos

Controla onde, na página, o elemento irá ficar, alterando o fluxo normal dos elementos.

- Name: position
- Value: static | relative | absolute | fixed

## Relative

- top
- bottom
- left
- right
- z-index

## Absolute

```css
position: absolute;
```

## Fixed

```css
position: fixed;
```

## Element Stacking

- É o empilhamento de elementos. Podemos usar o z-index para determinar a ordem da posição do elemento. Quanto maior o z-index, mais "acima" vai aparecer o elemento.

```css
/* exemplo: */

z-index: 3;
```

## Flexbox

Nos permite posicionar os elementos dentro da caixa
Controle em uma dimensão (horizontal ou vertical)

- Alinhamento, direcionamento, ordenar e tamanhos

```css
div.parent {
	display: flex;
}
```

## Flex-direction

- Qual a direção do flex: horizontal ou vertical

row | column

- Alinhamento

justify-content
align-items

## Grid

```css

body {
    margin: 0;
    height: 100vh;

    display: grid;
    grid-template-areas:
        "header header"
        "main aside"
        "footer footer";

    grid-template-rows: 30px 1fr 40px;
    grid-template-columns: 1fr 80px;
}

header {
    grid-area: header;
    background-color: green;
}

main {
    grid-area: main;
    background-color: red;
}

aside {
    grid-area: aside;
    background-color: blue;
}

footer {
    grid-area: footer;
    background-color: gray;
}

```