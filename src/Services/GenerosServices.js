import GenerosDAO from "../DAO/GenerosDAO.js"

class ValidacaoServicesGeneros {
    /**
 * Método que valida a existencia do gênero na base de dados
 * @param {string} id 
 * @returns {boolean}
 */
    static validarExistenciaGenero(id) {
        const genero = GenerosDAO.buscarGeneroPorId(id)
        if (genero) {
            return true
        } else {
            return false
        }
    }
    /**
     * Método de validação do nome do gênero
     * @param {string} nome 
     * @returns {boolean}
     */
    static validaNome(nome) {
        return typeof nome == "string" && nome.length > 3
    }
}
export default ValidacaoServicesGeneros;

















/**
    static validaId(id) {
        // Verifica se o ID é uma string válida
        if (!id || typeof id !== 'string') {
            throw new Error('ID de gênero inválido');
        }
    }

    static validaInsercaoGenero(body) {
        // Verifica se o objeto body é válido e contém as propriedades obrigatórias
        if (
            !body ||
            typeof body !== 'object' ||
            !body.nome ||
            typeof body.nome !== 'string' ||
            !body.descricao ||
            typeof body.descricao !== 'string'
        ) {
            throw new Error('Dados de gênero inválidos');
        }
    }
}
**/