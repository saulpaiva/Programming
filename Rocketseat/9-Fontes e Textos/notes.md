# Trabalhando com fontes

Tipografia transmite mensagem

- negrito
- tamanho
- estilo

## font-properties

- A tipografia transmite uma mensagem, por exemplo, quando queremos dar uma ênfase no texto nós podemos escrever o mesmo em negrito.

Nós podemos transmitir uma mensagem diferente dependendo do estilo que escrevemos o texto. Algumas das propriedades de fonts do CSS que podem nos ajudar a transmitir uma mensagem através dos textos da página são:

```css
font-family
font-weight
font-style
font-size
```

## font-family

- Tipo de fonte de um elemento
- Lista de fontes e ordem de prioridade
- inclui fallback font

```css
p {
  font-family: "Times New Roman", Times, serif;
}
```

- serif
- sans-serif

## font-weight

- Peso da fonte

- Valores: normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

Dependendo da família da fonte não conseguimos utilizar todos os pesos de fonte

```css
p {
	font-weight: bold;
}
```

Referência:
- https://www.w3.org/TR/css-fonts-3/

## font-style

- É o estilo da fonte
- Valores: normal | italic | oblique

Os valores que podem ser aplicados dependem da fonte usada

```css
span {
	font-style: italic;
}
```

## font-size

- Tamanho da fonte

```css
p {
	font-size: 18px;
}
```

## Web-fonts

### <strong>Fontes do sistema x Fontes da web</strong>

<strong>Fontes do sistema</strong> são as fontes que estão instaladas na máquina do usuário e nem sempre o cliente vai ter instalado as fontes usadas no projeto e isso pode fazer com que os estilos dos textos não sejam aplicados corretamente, mas para resolver esses casos podemos preparar nossas fonts para web ou usar <strong>fontes da web</strong>.

Como usar fontes para web?

```css
@font-face
@import
link
```

Referências:
- https://www.w3.org/TR/css-fonts-3/
- https://fonts.google.com/ 
- https://css-tricks.com/snippets/css/using-font-face-in-css/

## font-variant

- Faz variações na apresentação da fonte

```css
p {
	font-variant: small-caps;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant

## font-stretch

- Alargamento ou encolhimento da fonte
- Aceita palavras-chaves como: expanded, condensed, normal
- Aceita porcentagens de 50% a 200%
- Essa propriedade não vai funcionar em todas as fontes

```css
p {
	font-stretch: expanded;
}
```

- https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch

Referência

- https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals

## Letter spacing

- Define o espaçamento entre os caracteres

```css
p {
	letter-spacing: 4px;
}
```

- https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing

## Word spacing

- Define o espaçamento entre palavras

```css
p {
	word-spacing: 1em;
}
```

- https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing

## Line height

- Define os espaços entre linhas
Pode ser com unidades ou sem unidades de medida
- Valores comuns: 1.5 ou 2

```css
p {
	line-height: 1.5;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/line-height

## Text transform

- Transformação do texto
- Valores podem ser: none | capitalize | uppercase | lowercase | full-width | full-size-kana

```css
p {
	text-transform: uppercase;
}
```

- https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform

## Text decoration

- Aparência decorativa de um texto

- style: wavy | dotted | double | dashed | solid
- line: underline | overline | line-through ( <em>podemos aplicar mais de 1 valor</em> )
- color: <color> values

```css
h1 {
	text-decoration: underline; /* shorthand */
}
```

```css
p {
  text-decoration: wavy overline blue; /* shorthand */
}
```

- https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration

## Text align

- Alinhamento de um texto

- Valores: start | end | left | right | center | justify | match-parent

```css
p {
	text-align: center;
}
```

- https://developer.mozilla.org/en-US/docs/Web/CSS/text-align

## Text shadow

- Sombra aplicada a um texto
- Permite múltiplos valores

```css
p {
  text-shadow: 1px 1px 1px red,
	       2px 2px 1px green; /* offset-x | offset-y | blur-radius | color */
}
```

- https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow

## Shorthand

Podemos usar o shorthand font para determinar os seguintes valores:

- font-style, font-variant, font-weight, font-stretch, font-size, line-height e font-family

```css
p {
  font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}
```