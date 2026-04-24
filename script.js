let livros = [
    {
        nome: "Tudo o que (não) fomos",
        autor: "Wemelly Luna",
        categoria: "Romance",
        preco: 35.90,
        imagem: "https://m.media-amazon.com/images/I/81qPj54hjXL._UF1000,1000_QL80_.jpg",
        ano: 2025,
        estoque: 50,
        editora: "Allbook Editora"
    },
    {
        nome: "Com amor, mamãe",
        autor: "Iliana Xander",
        categoria: "Suspense",
        preco: 28.52,
        imagem: "https://m.media-amazon.com/images/I/71DA+TIIuFL._AC_UF1000,1000_QL80_.jpg",
        ano: 2025,
        estoque: 100,
        editora: "Intrínseca"
    },
    {
        nome: "E não sobrou nenhum",
        autor: "Agatha Christie",
        categoria: "Suspense",
        preco: 15.20,
        imagem: "https://m.media-amazon.com/images/I/71u9uqTYBcL.jpg",
        ano: 2014,
        estoque: 35,
        editora: "GLobo Livros"
    },
    {
        nome: "Casamento Perfeito",
        autor: "Jeneva Rose",
        categoria: "Romance",
        preco: 58.00,
        imagem: "https://m.media-amazon.com/images/I/71KznjIVAqL._AC_UF1000,1000_QL80_.jpg",
        ano: 2024,
        estoque: 80,
        editora: "DarkSide Books"
    },
    {
        nome: "O assassinato no verão de 1999",
        autor: "Jeneva Rose",
        categoria: "Suspense",
        preco: 70.00,
        imagem: "https://m.media-amazon.com/images/I/91cX4hRBUbL.jpg",
        ano: 2025,
        estoque: 60,
        editora: "Intrínseca"
    },
    {
        nome: "A Culpa É das Estrelas",
        autor: "John Green",
        categoria: "Romance",
        preco: 45.00,
        imagem: "https://i.pinimg.com/736x/76/db/99/76db993e847b17dda49c7f97cb9cb6b2.jpg",
        ano: 2014,
        estoque: 20,
        editora: "Intrínseca"
    },
    {
        nome: "O Beijo da Neve",
        autor: "Babi A. Sette",
        categoria: "Romance",
        preco: 42.27,
        imagem: "https://i.pinimg.com/1200x/88/e8/51/88e851bfc1921f1c25b3661440a1103b.jpg",
        ano: 2023,
        estoque: 38,
        editora: "Editora Verus"
    },
    {
        nome: "Sapatilhas de Gelo",
        autor: "Babi A. Sette",
        categoria: "Romance",
        preco: 43.14,
        imagem: "https://m.media-amazon.com/images/I/81ywVJPVbXL._SY342_.jpg",
        ano: 2024,
        estoque: 80,
        editora: "Editora Verus"
    },
    {
        nome: "A Sombra da Terra do Nunca",
        autor: "Nikki ST. Crowe",
        categoria: "Dark Romance",
        preco: 89.90,
        imagem: "https://i.pinimg.com/736x/f8/fe/70/f8fe70977e7cf4dc192eabce48e35afc.jpg",
        ano: 2023,
        estoque: 50,
        editora: "Universo dos Livros"
    },
    {
        nome: "Assombrando Adeline",
        autor: "H. D. Carlton",
        categoria: "Dark Romance",
        preco: 48.20,
        imagem: "https://i.pinimg.com/736x/1d/4a/9e/1d4a9e91aa4a1b347d46999bbf0da30f.jpg",
        ano: 2021,
        estoque: 90,
        editora: "Cabana Vermelha"
    },
    {
        nome: "O Fabricante de Lágrimas",
        autor: "Erin Doom",
        categoria: "Romance",
        preco: 54.99,
        imagem: "https://m.media-amazon.com/images/I/81Vw5NiVLyL._SY342_.jpg",
        ano: 2023,
        estoque: 100,
        editora: "HarperCollins Brasil e Pitaya"
    },
    {
        nome: "O livro de Azrael",
        autor: "Amber V. Nicole",
        categoria: "Fantasia",
        preco: 55.00,
        imagem: "https://m.media-amazon.com/images/I/91hl43KH-QL._SY342_.jpg",
        ano: 2024,
        estoque: 40,
        editora: "Inside Books"
    },
    {
        nome: "Scarlet Devotion",
        autor: "Camila Koengkan",
        categoria: "Dark Romance",
        preco: 90.85,
        imagem: "https://i.pinimg.com/736x/dc/ae/78/dcae7846bfe74610ab11a038e0452afd.jpg",
        ano: 2023,
        estoque: 85,
        editora: "Cabana Vermelha"
    },
    {
        nome: "Trono de Vidro",
        autor: "Sarah J. Maas",
        categoria: "Fantasia",
        preco: 75.61,
        imagem: "https://i.pinimg.com/736x/5e/f5/62/5ef562940b6c0a6b3ef2e193856726e3.jpg",
        ano: 2023,
        estoque: 125,
        editora: "Galera Record"
    }
];

function render() {
    const lista = document.getElementById("listaLivros");
    lista.innerHTML = "";

    livros.forEach(l => {
        lista.innerHTML += `
            <div class="card">
                <img src="${l.imagem}" alt="">
                <h3>${l.nome}</h3>
                <p>${l.autor}</p>
                <p>R$ ${l.preco}</p>
                <p>${l.ano}</p>
                <p>${l.categoria}</p>
            </div>
        `;
    });
}

function abrirModal() {
    modal.classList.remove("oculto");
}

function fecharModal() {
    modal.classList.add("oculto");
}

function salvarLivro() {
    const novo = {
        nome: nome.value,
        autor: autor.value,
        categoria: categoria.value,
        preco: preco.value,
        imagem: imagem.value,
        estoque: estoque.value,
        ano: ano.value,
        editora: editora.value
    };

    livros.push(novo);

    fecharModal();
    render();
}

render();
