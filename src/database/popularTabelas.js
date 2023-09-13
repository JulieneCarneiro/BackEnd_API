// Importação da base de dados 
import Database from "./Database.js";

/** Script de inserção dos dados na base **/

//Adicionando LIVROS
const ADD_LIVROS_DATA = `
INSERT INTO LIVROS (TITULO, PRECO, IDIOMA)
VALUES 
    ('Eugênio Oliveira', 'eugenio.oliveira@bol.com.br', '2140028911'),
    ('Olívia Ribeiro', 'olivia.ribeiro@gmail.com', '1140028922'),
    ('Mirtes Faria Lima', 'mirtes_fl@yahoo.com', '3125214430')
`
//Adicionando LIVROS
const ADD_AUTORES_DATA = `
INSERT INTO LIVROS (NOME, PAIS)
VALUES 
    ('Eugênio Oliveira', 'Brasil'),
    ('Olívia Ribeiro', 'Portugal'),
    ('Mirtes Faria Lima', 'Estados Unidos')
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
