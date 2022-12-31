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

