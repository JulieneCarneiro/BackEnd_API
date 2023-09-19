// validacao.js
// Função de validação para o título do livro
export function validaTituloLivro(titulo) {
    // Verifica se o título não está vazio e tem no máximo 100 caracteres
    return titulo && titulo.length <= 100;
}

// Função de validação para o preço do livro
export function validaPrecoLivro(preco) {
    // Verifica se o preço é um número positivo
    return typeof preco === "number" && preco > 0;
}

// Função de validação para o autor do livro
export function validaAutorLivro(autor) {
    // Verifica se o autor é um número positivo
    return typeof autor === "number" && autor > 0;
}

// Função de validação para o gênero do livro
export function validaGeneroLivro(genero) {
    // Verifica se o gênero não está vazio e tem no máximo 100 caracteres
    return genero && genero.length <= 100;
}

// Função de validação para a editora do livro
export function validaEditoraLivro(editora) {
    // Verifica se a editora é um número positivo
    return typeof editora === "number" && editora > 0;
}

// Função de validação para o idioma do livro
export function validaIdiomaLivro(idioma) {
    // Verifica se o idioma não está vazio e tem no máximo 30 caracteres
    return idioma && idioma.length <= 30;
}
