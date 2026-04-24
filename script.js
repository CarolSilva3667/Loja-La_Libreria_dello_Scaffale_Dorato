let livros = [
    {
        nome: "Tudo o que (não) fomos",
        autor: "Wemelly Luna",
        categoria: "Romance",
        preco: 35.90,
        imagem: "https://m.media-amazon.com/images/I/81qPj54hjXL._UF1000,1000_QL80_.jpg",
        ano: 2025
    },
    {
        nome: "Com amor, mamãe",
        autor: "Iliana Xander",
        categoria: "Suspense",
        preco: 28.52,
        imagem: "https://m.media-amazon.com/images/I/71DA+TIIuFL._AC_UF1000,1000_QL80_.jpg",
        ano: 2025
    },
    {
        nome: "E não sobrou nenhum",
        autor: "Agatha Christie",
        categoria: "Suspense",
        preco: 15.20,
        imagem: "https://m.media-amazon.com/images/I/71u9uqTYBcL.jpg",
        ano: 2014
    },
    {
        nome: "Casamento Perfeito",
        autor: "Jeneva Rose",
        categoria: "Romance",
        preco: 58.00,
        imagem: "https://m.media-amazon.com/images/I/71KznjIVAqL._AC_UF1000,1000_QL80_.jpg",
        ano: 2024
    },
    {
        nome: "O assassinato no verão de 1999",
        autor: "Jeneva Rose",
        categoria: "Suspense",
        preco: 70.00,
        imagem: "https://m.media-amazon.com/images/I/91cX4hRBUbL.jpg",
        ano: 2025
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
        imagem: imagem.value
    };

    livros.push(novo);

    fecharModal();
    render();
}

render();