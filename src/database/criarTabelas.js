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
// Criação da tabela GENEROS
const GENEROS_TABLE = `
CREATE TABLE IF NOT EXISTS "GENEROS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "ROMANCE" varchar(100),
    "TERROR" varchar(100),
    "COMEDIA" varchar(100),
    "DRAMA" varchar(100),
    "AVENTURA" varchar(100),
    "AUTOAJUDA" varchar(100),
    "COMUNICAO" varchar(100),
    "ACADEMICOS" varchar(100),
    "LGBT" varchar(100),
    "ARTE" varchar(100),
    "PROGRAMACAO" varchar(100)
);
`
// Criação da tabela EDITORAS
const EDITORAS_TABLE = `
CREATE TABLE IF NOT EXISTS "EDITORAS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(100),
    "EMAIL" varchar(100),
    "TELEFONE" varchar(11)
);
`
// Criação da tabela CLIENTES
const CLIENTES_TABLE = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(100),
    "EMAIL" varchar(100),
    "TELEFONE" varchar(11),
    "ENDERECO" varchar(200)
);
`
// Criação da tabela PAGAMENTO
const PAGAMENTO_TABLE = `
CREATE TABLE IF NOT EXISTS "PAGAMENTO" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "PIX" varchar(50),
    "CREDITO" varchar(50),
    "BOLETO" varchar(50)
);
`
// Criação da tabela ESTOQUE
const ESTOQUE_TABLE = `
CREATE TABLE IF NOT EXISTS "PAGAMENTO" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "LIVROS" varchar(100),
    "QUANTIDADE" varchar(10)
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

function criaTabelaGeneros() {
    Database.run(GENEROS_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela dos Gêneros")
        } else {
            console.log("Tabela Gêneros criada com sucesso")
        }
    });
}

function criaTabelaEditoras() {
    Database.run(EDITORAS_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela das Editoras")
        } else {
            console.log("Tabela Editoras criada com sucesso")
        }
    });
}

function criaTabelaClientes() {
    Database.run(CLIENTES_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela dos Clientes")
        } else {
            console.log("Tabela Clientes criada com sucesso")
        }
    });
}

function criaTabelaPagamento() {
    Database.run(PAGAMENTO_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela dos Pagamentos")
        } else {
            console.log("Tabela Pagamentos criada com sucesso")
        }
    });
}

function criaTabelaEstoque() {
    Database.run(ESTOQUE_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela dos Estoques")
        } else {
            console.log("Tabela Estoques criada com sucesso")
        }
    });
}



