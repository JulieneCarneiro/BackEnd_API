// Importação da base de dados 
import Database from "./Database.js";

/** Script de inserção dos dados na base **/

//Adicionando LIVROS
const ADD_LIVROS_DATA = `
INSERT INTO LIVROS (TITULO, PRECO, AUTORES, GENEROS, EDITORAS, IDIOMA)
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

export function populaTabelaPagamento() {
    Database.run(ADD_PAGAMENTO_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela de Pagamento")
        }
        else {
            console.log("Tabela Pagamento populada com sucesso")
        }
    });
}

export function populaTabelaEstoque() {
    Database.run(ADD_ESTOQUE_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela de Estoque")
        }
        else {
            console.log("Tabela Estoque populada com sucesso")
        }
    });
}

