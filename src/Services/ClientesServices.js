
import ClientesDAO from "../DAO/ClientesDAO.js"

class ValidacaoServicesCliente{
    /**
     * Método que valida a existencia do usuário na base de dados
     * @param {string} id 
     * @returns {boolean}
     */
    static validarExistenciaCliente(id){
        const cliente = ClientesDAO.buscarClientePorId(id)
        if(cliente){
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
     * Método para validação de email
     * @param {string} email 
     * @returns {boolean}
     */
    static validaEmail(email){
        return typeof email == "string" && email.length > 2
    }

    /**
     * Método para validação de telefone
     * @param {string} telefone 
     * @returns {boolean}
     */
    static validaTelefone(telefone){
        const telefoneInt = parseInt(telefone)
        return typeof telefone == "string" && telefone.length > 9 && telefone == telefoneInt
    }

    /**
     * Método para validação de todos os campos fornecidos pelo cliente na entidade usuário
     * @param {string} nome 
     * @param {string} email 
     * @param {string} telefone 
     * @returns 
     */
    static validaCamposCliente(nome, email, telefone){
        const isValid = this.validaNome(nome) && this.validaEmail(email) && this.validaTelefone(telefone)
        return isValid
    }
}

export default ValidacaoServicesCliente


// class ValidacaoClientes {
//     // Classe de validação para Clientes

//     // Método para validar a inserção de dados do cliente
//     static validaInsercaoCliente(clienteModelado) {
//         // Verifica se clienteModelado é um objeto válido
//         if (!clienteModelado || typeof clienteModelado !== "object") {
//             throw new Error("Dados do cliente inválidos.");
//         }

//         // Verifica se o nome do cliente é uma string válida e obrigatória
//         if (!clienteModelado.nome || typeof clienteModelado.nome !== "string") {
//             throw new Error("Nome do cliente é obrigatório e deve ser uma string.");
//         }

//         // Verifica se o e-mail do cliente é uma string válida e obrigatória
//         if (!clienteModelado.email || typeof clienteModelado.email !== "string") {
//             throw new Error("E-mail do cliente é obrigatório e deve ser uma string.");
//         }

//         // Verifica se o telefone do cliente é uma string válida e obrigatória
//         if (!clienteModelado.telefone || typeof clienteModelado.telefone !== "string") {
//             throw new Error("Telefone do cliente é obrigatório e deve ser uma string.");
//         }

//         // Verifica se o endereço do cliente é uma string válida e obrigatória
//         if (!clienteModelado.endereco || typeof clienteModelado.endereco !== "string") {
//             throw new Error("Endereço do cliente é obrigatório e deve ser uma string.");
//         }



//         return true; // Os dados são válidos
//     }
// }


// export default ValidacaoClientes

