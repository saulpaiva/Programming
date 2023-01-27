## O que é a web semântica?

- É basicamente adicionar significado à uma linguagem, e no caso do HTML, para dar significado ao conteúdo.

- É importante praticarmos, pois no caso de necessitarmos alterar algo na nossa página, saberemos entender melhor como estão organizadas as coisas na estrutura semântica.

- Todo site é único, mas existem padrões ou convenções, que identificamos ambas intencional e não intencionalmente, e ao usar uma semântica consistente, ajudamos os user agents a identificar corretamente os elementos e apresentá-los aos visitantes da página.

- Também é importante para acessibilidade, pense em alguém que use um leitor de página, por exemplo. Com uma página desorganizada, é difícil fazer um bom uso de nossa página.

- Além disso, os motores de busca dão preferência à sites que têm sua semântica em dia, portanto um site bem estruturado é um site melhor encontrado na web.

## Seções comuns

Além de trabalhar com textos e links no HTML, temos que sempre pensar na estrutura que colocamos no HTML, mas conforme formos crescendo no nosso entendimento, melhor vai sendo nossa estrutura.

Podemos entender algumas estruturas comuns do HTML, por isso vamos falar sobre essas seções comuns que temos entre documentos, mas atenção que nem todas as páginas vão ter todas essas seções.

- Cabeçalho < header > :

O cabeçalho do nosso site, o local onde geralmente fica a logo e o menu.

- Navegação < nav > :

A navegação do site vai oferecer links para seções do site, o nosso menu. costuma ficar dentro da header, porém pode ficar em outros lugares, como em uma parte lateral, ou na parte de baixo.

- Conteúdo principal < main > :

A parte do site aonde vai o conteúdo principal, no caso de um blog, teremos vários artigos, vários posts.

- Conteúdo relacionado < aside > :

O conteúdo relacionado é algo que seja relacionado levemente ao nosso conteúdo principal, porém não tanto para ficar lá.

- Rodapé < footer > :
 Onde ficam as informações da parte de baixo da página.

### Exemplo básico de como ficaria um HTML semântico:

```html
<body>
    <header>
        logomarca

        <nav>
            <ul>
                <li>item</li>
            </ul>
        </nav>
    </header>

    <main>
        conteúdo principal
    </main>

    <aside>
        parte lateral
    </aside>

    <footer>rodapé</footer>

</body>
```