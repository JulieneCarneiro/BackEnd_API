// Importa o módulo de validação
import * as validacao from "./validacao.js";

// Função de validação para o título do livro
function validaTituloLivro(titulo) {
    // Verifica se o título não está vazio e tem no máximo 100 caracteres
    return titulo && titulo.length <= 100;
}

// Função de validação para o preço do livro
function validaPrecoLivro(preco) {
    // Verifica se o preço é um número positivo
    return typeof preco === "number" && preco > 0;
}

// Função de validação para o autor do livro
function validaAutorLivro(autor) {
    // Verifica se o autor é um número positivo
    return typeof autor === "number" && autor > 0;
}

// Função de validação para o gênero do livro
function validaGeneroLivro(genero) {
    // Verifica se o gênero não está vazio e tem no máximo 100 caracteres
    return genero && genero.length <= 100;
}

// Função de validação para a editora do livro
function validaEditoraLivro(editora) {
    // Verifica se a editora é um número positivo
    return typeof editora === "number" && editora > 0;
}

// Função de validação para o idioma do livro
function validaIdiomaLivro(idioma) {
    // Verifica se o idioma não está vazio e tem no máximo 30 caracteres
    return idioma && idioma.length <= 30;
}

// Função de validação para a inserção de um livro
function validaInsercaoLivro(titulo, preco, autor, genero, editora, idioma) {

    return (
        validacao.validaTituloLivro(titulo) &&
        validacao.validaPrecoLivro(preco) &&
        validacao.validaAutorLivro(autor) &&
        validacao.validaGeneroLivro(genero) &&
        validacao.validaEditoraLivro(editora) &&
        validacao.validaIdiomaLivro(idioma)
    );
}

// Função de validação antes de inserir um livro
if (validaInsercaoLivro('O poder da leitura', 42.90, 1, 'ACADEMICOS', 1, 'Portugues')) {
    populaTabelaLivros();
} else {
    console.log("Dados inválidos. A inserção foi cancelada.");
}
