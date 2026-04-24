const db = require("../data/conection");

const listarLivros = async (req, res) => {
    const lista = await db.query("SELECT * FROM livros");
    res.json(lista[0]).end();
};

const buscarLivros = async (req, res) => {
    const id = req.params.id;

    const produto = await db.query(
        "SELECT * FROM livros WHERE id = ?", 
        [id]
    );

    res.json(produto[0][0]).end();
};

const cadastrarLivros = async (req, res) => {
    const { nome, ano, preco, estoque, categoria, editora, autor } = req.body;

    const novoLivro = await db.query(
        "INSERT INTO livros VALUES (DEFAULT, ?, ?, ?, ?, ?, ?, ?)",
        [nome, ano, preco, estoque, categoria, editora, autor]
    );

    const livro = {
        id: novoLivro.insertId,
        nome,
        ano,       
        preco,
        estoque,
        categoria,
        editora,
        autor
    };

    res.status(201).json(livro).end();
};

const excluirLivro = async (req, res) => {
    const id = req.params.id;

    try {
        const del = await db.query(
            "DELETE FROM livros WHERE id = ?", 
            [id]
        );

        const info = { msg: "" };

        if (del[0].affectedRows === 1) {
            info.msg = "Livro excluído com sucesso";
        } else {
            info.msg = "Livro não encontrado";
        }

        res.status(200).json(info).end();

    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};

const atualizarLivro = async (req, res) => {
    const { id, nome, ano, preco, estoque, categoria, editora, autor } = req.body;

    try {
        const atualiza = await db.query(
            "UPDATE livros SET nome = ?, ano = ?, preco = ?, estoque = ?, categoria = ?, editora = ?, autor = ? WHERE id = ?",
            [nome, ano, preco, estoque, categoria, editora, autor, id]
        );

        const info = { msg: "" };

        if (atualiza[0].affectedRows === 0) {
            info.msg = "Nenhum livro encontrado";
        } else if (atualiza[0].affectedRows === 1) {
            info.msg = "Livro atualizado com sucesso";
        }

        res.status(200).json(info).end();

    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};

module.exports = {
    listarLivros,
    buscarLivros,
    cadastrarLivros,
    excluirLivro,
    atualizarLivro
};