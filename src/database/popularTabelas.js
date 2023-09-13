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
//Adicionando LIVROS
const ADD_AUTORES_DATA = `
INSERT INTO LIVROS (NOME, PAIS)
VALUES 
    ('Carlos Duhigg', 'Brasil'),
    ('Julia ZZagonel', 'Brasil'),
    ('Emma Liord', 'Estados Unidos')
`





/** Funções que polula via SQLite as tabelas */

function populaTabelaLivros() {
    Database.run(ADD_LIVROS_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela de Livros")
        }
        else {
            console.log("Tabela Livros populada com sucesso")
        }
    });
}

function populaTabelaAutores() {
    Database.run(ADD_AUTORES_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela de Autores")
        }
        else {
            console.log("Tabela Autores populada com sucesso")
        }
    });
}
