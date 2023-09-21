import AutoresDAO from "../DAO/AutoresDAO.js"
import LivrosDAO from "../DAO/LivrosDAO.js"

class ValidacaoServicesAutor{
    /**
     * Método que valida a existencia do autor na base de dados
     * @param {string} id 
     * @returns {boolean}
     */
    static validarExistenciaAutor(id){
        const autor = AutoresDAO.buscarAutorPorId(id)
        if(autor){
            return true
        } else {
            return false
        }
    }

    
    /**
     * Método de validação de nome
     * @param {string} nome 
     * @returns {boolean}
     */
    static validaNome(nome){
        return typeof nome == "string" && nome.length > 2
    }

        /**
     * Método de validação de pais
     * @param {string} pais
     * @returns {boolean}
     */
        static validaPais(pais){
            return typeof pais == "string" && pais.length > 2
        }

        /**
     * Método que valida a existencia do livro na base de dados
     * @param {string} id 
     * @returns {boolean}
     */
        static validarExistenciaLivro(id){
            const livro = LivrosDAO.buscarLivroPorId(id)
            if(livro){
                return true
            } else {
                return false
            }
        }

            /**
     * Método para validação de todos os campos fornecidos na entidade autores
     * @param {string} nome 
     * @param {string} pais
     * @returns 
     */
    static validaAutor(nome, pais){
        const isValid = this.validaNome(nome) && this.validaPais(pais)
        return isValid
    }
    }

    export default ValidacaoServicesAutor








// // validacao.js
// // Função de validação para o título do livro
// export function validaTituloLivro(titulo) {
//     // Verifica se o título não está vazio e tem no máximo 100 caracteres
//     return titulo && titulo.length <= 100;
// }

// // Função de validação para o preço do livro
// export function validaPrecoLivro(preco) {
//     // Verifica se o preço é um número positivo
//     return typeof preco === "number" && preco > 0;
// }

// // Função de validação para o autor do livro
// export function validaAutorLivro(autor) {
//     // Verifica se o autor é um número positivo
//     return typeof autor === "number" && autor > 0;
// }

// // Função de validação para o gênero do livro
// export function validaGeneroLivro(genero) {
//     // Verifica se o gênero não está vazio e tem no máximo 100 caracteres
//     return genero && genero.length <= 100;
// }

// // Função de validação para a editora do livro
// export function validaEditoraLivro(editora) {
//     // Verifica se a editora é um número positivo
//     return typeof editora === "number" && editora > 0;
// }

// // Função de validação para o idioma do livro
// export function validaIdiomaLivro(idioma) {
//     // Verifica se o idioma não está vazio e tem no máximo 30 caracteres
//     return idioma && idioma.length <= 30;
// }
// // Classe de validação para autores
// class ValidacaoAutores {
//     // Método para validar a inserção de dados de autor
//     static validaInsercaoAutor(autorModelado) {
//         // Verifica se autorModelado é um objeto válido
//         if (!autorModelado || typeof autorModelado !== "object") {
//             throw new Error("Dados de autor inválidos.");
//         }

//         // Verifica se o nome do autor é uma string válida e obrigatória
//         if (!autorModelado.nome || typeof autorModelado.nome !== "string") {
//             throw new Error("Nome do autor é obrigatório e deve ser uma string.");
//         }

//         // Verifica se a nacionalidade do autor é uma string válida e obrigatória
//         if (
//             !autorModelado.nacionalidade ||
//             typeof autorModelado.nacionalidade !== "string"
//         ) {
//             throw new Error(
//                 "Nacionalidade do autor é obrigatória e deve ser uma string."
//             );
//         }

//         return true;
//     }
// }