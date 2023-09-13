/** Script de importação do banco **/
import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { criaTabelaLivros } from "./criarTabelas.js"
import { populaTabelaLivros } from "./popularTabelas.js"

//Torna as ações do SQLite legiveis no terminal
sqlite3.verbose()

//Aponta o caminho onde será salvo o arquivo database.db
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db"

//Inicializa o banco de dados SQLite
const Database = new sqlite3.Database(filePath)

export default Database


/** Roda as funções de criação de tabela e população em serie (Uma após a outra) **/

Database.serialize(() => {
    criaTabelaLivros();
    populaTabelaLivros();
})