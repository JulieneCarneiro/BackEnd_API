// Importação da base de dados 
import Database from "./Database.js";

/** Script de criação das tabelas **/

// Criação da tabela LIVROS
const LIVROS_TABLE = `
CREATE TABLE IF NOT EXISTS "LIVROS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "TITULO" varchar(100),
    "PRECO" DOUBLE(10),
    "IDIOMA" varchar(30)
);
`
// Criação da tabela AUTORES
const AUTORES_TABLE = `
CREATE TABLE IF NOT EXISTS "AUTORES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(100),
    "PAIS" varchar(100)
);
`


/** Funções de aplicação da criação das tabelas usando o SQLite **/

function criaTabelaLivros() {
    Database.run(LIVROS_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela de Livros")
        } else {
            console.log("Tabela Livros criada com sucesso")
        }
    });
}

function criaTabelaAutores() {
    Database.run(AUTORES_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela dos Autores")
        } else {
            console.log("Tabela Autores criada com sucesso")
        }
    });
}