import LivrosDAO from "../DAO/LivrosDAO.js";

class ValidacaoServicesLivros {
    /**
     * Método que valida a existência do livro na base de dados
     * @param {string} id 
     * @returns {boolean}
     */
    static async validarExistenciaLivro(id) {
      const livro = await LivrosDAO.buscarLivroPorId(id);
      return livro ? true : false;
    }


    /**
     * Método de validação de título do livro
     * @param {string} titulo 
     * @returns {boolean}
     */
    static validaTitulo(titulo) {
      return typeof titulo === "string" && titulo.length > 2;
    }


    /**
     * Método de validação de preço do livro
     * @param {number} preco 
     * @returns {boolean}
     */
    static validaPreco(preco) {
      return typeof preco === "number" && preco >= 0;
    }

    /**
     * Método de validação de gênero do livro
     * @param {string} genero 
     * @returns {boolean}
     */
    static validaGenero(genero) {
      return typeof genero === "string" && genero.length > 2;
    }

    /**
     * Método de validação de idioma do livro
     * @param {string} titulo 
     * @returns {boolean}
     */
    static validaIdioma(idioma) {
      return typeof idioma === "string" && idioma.length > 2;
    }


    /**
     * Método para validação de todos os campos fornecidos para atualização de um livro
     * @param {string} titulo 
     * @param {number} preco 
     * @param {string} genero 
     * @param {string} idioma 
     * @returns {boolean}
     */
    static validaCamposLivro(titulo, preco, genero, idioma) {
      const isValid = this.validaTitulo(titulo) && this.validaPreco(preco)&& this.validaGenero(genero)&& this.validaIdioma(idioma);
      return isValid;
    }
}

  export default ValidacaoServicesLivros;

// class ValidacaoLivros {
//     // Método para validar a inserção de dados de livro
//     static validaInsercaoLivro(livroModelado) {
//         // Verifica se livroModelado é um objeto válido
//         if (!livroModelado || typeof livroModelado !== 'object') {
//             throw new Error('Dados de livro inválidos.');
//         }

//         // Verifica se o título do livro é uma string válida e obrigatória
//         if (!livroModelado.titulo || typeof livroModelado.titulo !== 'string') {
//             throw new Error('Título do livro é obrigatório e deve ser uma string.');
//         }

//         // Verifica se o autor do livro é uma string válida e obrigatória
//         if (!livroModelado.autor || typeof livroModelado.autor !== 'string') {
//             throw new Error('Autor do livro é obrigatório e deve ser uma string.');
//         }

//         // Verifica se o gênero do livro é uma string válida e obrigatória
//         if (!livroModelado.genero || typeof livroModelado.genero !== 'string') {
//             throw new Error('Gênero do livro é obrigatório e deve ser uma string.');
//         }

//         // Verifica se o número de páginas do livro é um número válido e obrigatório
//         if (
//             !livroModelado.paginas ||
//             typeof livroModelado.paginas !== 'number' ||
//             livroModelado.paginas <= 0
//         ) {
//             throw new Error(
//                 'Número de páginas do livro é obrigatório e deve ser um número maior que zero.'
//             );
//         }

//         // Se todas as validações passarem, os dados são considerados válidos
//         return true;
//     }
// }
