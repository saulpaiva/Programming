# Usamos CSS para alterar cores do nosso documento.

## Tipos

* background-color (para caixas)
* color (para textos)
* border-color (para caixas)
* outros

## Valores

### Podemos definir valores por:

* palavra-chave (blue, transparent)
* hexadecimal (#990011)
* funções: rgb, rgba, hsl, hsla

## plug-in no vscode para Color Highlight

- https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight


## CORES

- Hexadecimal

```css
/*<hex-color> values 0-9 e A-F*/

color: #090; /* RED, GREEN, BLUE */
color: #009900;
color: #090a; /* RED, GREEN, BLUE, alpha */
color:#009900aa;
```

- RGB → Red, Green e Blue

O alpha representa a transparência da cor

```css
/*<rgb()> values */

color: rgb(34, 12, 64, 0.6) /* 0-255 */
color: rgba(34, 12, 64, 0.6)
```

- HSL → Hue - Saturation - Lightness

```css
color: hsl(180, 100%, 50%, 60%)
color: hsla(180, 100%, 50%, 60%)
```

## Global values

```css
/* Global values */

color: inheritr; /* Herda a cor do elemento anterior */
color: initial; /* Volta a sua cor inicial */
color: unset; /* Pega a cor do contexto */
```

## Referência

- https://developer.mozilla.org/en-US/docs/Web/CSS/color_value

## Conver a Color

- https://convertacolor.com

## Background

- Para adicionar uma imagem como background podemos usar a propriedade background-image

- Por padrão a imagem vai se repetir e podemos modificar essa opção usando a propriedade background-repeat

```css
/* Values */

background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* Podedmos usar 2 valores: horizontal | vertical */

background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;
```

- A propriedade background-origin é quem define o ponto de origem de uma imagem específica.

```css
/* Principais valores */

background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;
```

- O background-clip define se a cor ou imagem do background iniciam debaixo de sua área de borda, preenchimento ou conteúdo.

```css
/* Principais valores */

background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;
```

- A propriedade background-attachment determina se a posição da imagem vai ser fixa ou se vai rolar junto com o conteúdo.

```css
/* Principais valores */

background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;
```

## Gradient

- linear-gradient() é a função usada para criar gradient linear com o CSS.

```css
background: linear-gradient(45deg, red, yellow)
```

- radial-gradient() é a função usada para criar gradient circular.

```css
background: radial-gradient(green, red, yellow)
background: radial-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 0, 0.2))
```

- Podemos aplicar múltiplos backgrounds em um mesmo elemento, podendo ter cor sólida, gradiente ou imagem. Para isso basta separar por vírgula cada background.