import Clientes from "../models/Clientes.js";
import DAO from "./DAO.js";

//const CLIENTES_TABELA = "CLIENTES" // NAO UTILIZAMOS 

class ClientesDAO extends DAO{
    /**
     * INSERE dados nos CLIENTES
     * @param {Clientes} data 
     */
    ////////////////////// ESSE AQUI TA FUNCIONANDO TAOKEI
    static async inserirCliente(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO CLIENTES (ID, NOME, EMAIL, TELEFONE, ENDERECO) VALUES (?,?,?,?,?)
        `
        const result = await this.inserir(query, dataValues)
        return result
    }

    /**
     * BUSCA todos os CLIENTES
     * @returns {Array<Clientes>}
     */
    static async buscarTodosOsClientes() {
     
    }


    /**
      * BUSCA cliente por ID
      * @param {string} id 
      * @returns {Clientes}
      */
    static async buscarClientePorId(id) {
      
    }

    /**
      * DELETA cliente por ID
      * @param {string} id 
      */
    static async deletarClientePorId(id) {
    
    }


    /**
     * ATUALIZA cliente por ID
     * @param {string} id 
     * @param {any} data 
    */
    static async AtualizarClientePorId(id, data) {
     
}

}

export default ClientesDAO;