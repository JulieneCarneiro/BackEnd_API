// Importação da base de dados 
import Database from "./Database.js";

/** Script de inserção dos dados na base **/

//Adicionando LIVROS
const ADD_LIVROS_DATA = `
INSERT INTO LIVROS (TITULO, PRECO, AUTOR, GENERO, EDITORA, IDIOMA)
VALUES 
    ('O poder da leitura', '42.99', 'Carlos Duhigg', 'ACADEMICOS', 'Objetivo', 'Portugues'),
    ('A deusa do desamor', '26.90', 'Julia ZZagonel', 'ROMANCE', 'AZT', 'Portugues'),
    ('Tweet Cute', '41.90', 'Emma Liord', 'COMEDIA', 'Wednerday the books', 'Ingles')
`
//Adicionando AUTORES
const ADD_AUTORES_DATA = `
INSERT INTO AUTORES (NOME, PAIS, LIVROS)
VALUES 
    ('Carlos Duhigg', 'Brasil', ''),
    ('Julia ZZagonel', 'Brasil', ''),
    ('Emma Liord', 'Estados Unidos', '')
`
//Adicionando GENEROS
const ADD_GENEROS_DATA = `
INSERT INTO GENEROS (LIVROS, NOME)
VALUES 
    ('', 'ROMANCE'),
    ('', 'COMEDIA'),
    ('', 'DRAMA')
`
//Adicionando EDITORAS
const ADD_EDITORAS_DATA = `
INSERT INTO EDITORAS (NOME, EMAIL, TELEFONE)
VALUES 
    ('', 'objetivo.editora@gmail.com', '41 3235-6669'),
    ('', 'aztedit@hotmail.com', '11 3007-4789'),
    ('', 'wednerday.ed.books@yahoo.com', '1 408 323-6581')
`
//Adicionando CLIENTES
const ADD_CLIENTES_DATA = `
INSERT INTO CLIENTES (NOME, EMAIL, TELEFONE, ENDERECO)
VALUES 
    ('Robson Ademir', 'robinho123@gmail.com', '41 99519-8777', 'Rua Trajetoria Triste, 6669 - Bairro: Depressão'),
    ('Michel Teló', 'michael159telozin@hotmail.com', '11 99878-5564', 'Rua Leonardo Sistemico, 523 - Bairro: Sitio Cercado'),
    ('Joelma Kalipiçon', 'jojokali@yahoo.com', '41 99356-1478', 'Rua Jose Arruda, 398 - Bairro: Solidão'),
    ('Léo Stronda', 'leleostrondinha@yahoo.com', '24 95366-9275', 'Rua Leoncio ovelha, 666 - Bairro: CIC Loko')
`
//Adicionando PEDIDOS
const ADD_PEDIDOS_DATA = `
INSERT INTO PEDIDOS (NUM_PEDIDO, CLIENTE, TITULO, QUANTIDADE, VALOR, PAGAMENTO)
VALUES 
    ('123', 'Robson Ademir', 'O poder da leitura', '1', '26.66', 'PIX'),
    ('124', 'Michel Teló, 'A deusa do desamor', '2', '26.66', 'Credito'),
    ('125', 'Joelma Kalipiçon', 'Tweet Cute', '1', '26.66', 'PIX'),
    ('126', 'Léo Stronda', 'Tweet Cute', '1', '26.66', 'Boleto')
`


/** Funções que polula via SQLite as tabelas */

export function populaTabelaLivros() {
    Database.run(ADD_LIVROS_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela de Livros")
        }
        else {
            console.log("Tabela Livros populada com sucesso")
        }
    });
}

export function populaTabelaAutores() {
    Database.run(ADD_AUTORES_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela dos Autores")
        }
        else {
            console.log("Tabela Autores populada com sucesso")
        }
    });
}

export function populaTabelaGeneros() {
    Database.run(ADD_GENEROS_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela de Gêneros")
        }
        else {
            console.log("Tabela Gêneros populada com sucesso")
        }
    });
}

export function populaTabelaEditoras() {
    Database.run(ADD_EDITORAS_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela das Editoras")
        }
        else {
            console.log("Tabela Editoras populada com sucesso")
        }
    });
}

export function populaTabelaClientes() {
    Database.run(ADD_CLIENTES_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela dos Clientes")
        }
        else {
            console.log("Tabela Clientes populada com sucesso")
        }
    });
}

export function populaTabelaPedidos() {
    Database.run(ADD_PEDIDOS_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela de Pedidos")
        }
        else {
            console.log("Tabela Pedidos populada com sucesso")
        }
    });
}

