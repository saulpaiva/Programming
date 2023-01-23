/** Buscando e encontrando dados em Array
 * 
 * Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios:
 * 
 *  - Contar o número de categorias e o número de livros em cada categoria;
    - Contar o número de autores;
    - Mostrar livros do autor Auguto Cury;
    - Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
 * 
 */

// Array de Livros

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },

    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

// conta o número de categorias

const totalCategories = booksByCategory.length

console.log(`Total de categorias: ${totalCategories}`)

// conta o número de livros por categoria

for (let i of booksByCategory) {
    console.log('Total de livros da categoria:', i.category)
    console.log(i.books.length)
}

function countAuthors() {
    let authors = [];

    for (let i of booksByCategory) {
        for (let book of i.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log(`Total de autores: ${authors.length}`)
}

countAuthors();

// mostra os livros de um autor

function booksOfAuthor(author) {
    let books = [];

    for (let i of booksByCategory) {
        for (let book of i.books) {
            if (book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury');