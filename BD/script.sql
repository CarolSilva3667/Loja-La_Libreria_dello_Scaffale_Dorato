DROP DATABASE IF EXISTS La_Libreria_dello_Scaffale_Dorato;

CREATE DATABASE La_Libreria_dello_Scaffale_Dorato;

USE La_Libreria_dello_Scaffale_Dorato;

CREATE TABLE livros(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200),
    ano INT,
    preco DECIMAL(10,2),
    estoque INT,
    categoria VARCHAR(100),
    editora VARCHAR(100),
    autor VARCHAR(100)
);