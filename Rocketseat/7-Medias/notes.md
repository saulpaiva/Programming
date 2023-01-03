# Medias no HTML

## Video

```html
<video  controls
        width="500"
        height="400"
        autoplay
        preload="metadata"
        loop
        muted
        poster="./assets-example/ball.png"
    >
        <source src="./assets-example/rocket.mp4" type="video/mp4">
    </video>
```

## Audio

```html
<audio controls>
        <source src="./assets-example/viper.mp3">
        <source src="./assets-example/viper.ogg">
        <p>Seu navegador não suporta audio</p>
</audio>
```

## Iframe

```html
<iframe width="1366" height="768" src="https://www.youtube.com/embed/xzInNO8_05Y" title="Simulação do Circuito RC - FILTROS PASSA ALTA E PASSA BAIXA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

## Images

- Tag IMG

```html
<a href="https://source.unsplash.com/random">
    <img 
    src="https://source.unsplash.com/random" alt="Imagem randômica com uso livre"
    title="Título da imagem"
    height="400px"
    >
</a>
```

- SVG

Scalable Vector Graphics

```html
<svg 
  version="1.1"
  baseProfile="full"
  width="100" 
  height="100"
  xmlns="http://www.w3.org/2000/svg"
  >
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```