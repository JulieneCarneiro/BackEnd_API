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
// Classe de validação para autores
class ValidacaoAutores {
    // Método para validar a inserção de dados de autor
    static validaInsercaoAutor(autorModelado) {
        // Verifica se autorModelado é um objeto válido
        if (!autorModelado || typeof autorModelado !== "object") {
            throw new Error("Dados de autor inválidos.");
        }

        // Verifica se o nome do autor é uma string válida e obrigatória
        if (!autorModelado.nome || typeof autorModelado.nome !== "string") {
            throw new Error("Nome do autor é obrigatório e deve ser uma string.");
        }

        // Verifica se a nacionalidade do autor é uma string válida e obrigatória
        if (
            !autorModelado.nacionalidade ||
            typeof autorModelado.nacionalidade !== "string"
        ) {
            throw new Error(
                "Nacionalidade do autor é obrigatória e deve ser uma string."
            );
        }

        return true;
    }
}