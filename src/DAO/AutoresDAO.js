import Autores from "../models/Autores.js";
import DAO from "./DAO.js";

//const CLIENTES_TABELA = "CLIENTES" // NAO ENTENDI PRA Q Q SERVE ISSO??????

class AutoresDAO extends DAO{
    /**
     * INSERIR DADOS na tabela AUTORES
     * @param {Autores} data 
     */
    ////////////////////// ESSE AQUI TA FUNCIONANDO AMÉM
    static async inserirAutor(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO AUTORES (ID, NOME, PAIS, LIVROS) VALUES (?,?,?,?)
        `
        const result = await this.inserir(query, dataValues)
        return result
    }

    /**
     * BUSCA TUDO pelo ID
     * @returns {Array<Clientes>}
     */
    static async buscarTodosOsAutores() {
      const query = `
      SELECT * FROM AUTORES
      `;
      const result = await this.buscar(query);
      return result;
    }


    /**
      * BUSCA pelo ID
      * @param {string} id 
      * @returns {Clientes}
      */
    static async buscarAutorPorId(id) {
      const query = `
      SELECT * FROM AUTORES WHERE ID_AUTOR = ?
      `;
      const result = await this.buscarPorId(query, [id]);
      return result;
    }

    /**
      * DELETA pelo ID 
      * @param {string} id 
      */
    static async deletarAutorPorId(id) {
      const query = `
      DELETE FROM AUTORES WHERE ID_AUTOR = ?
      `;
      await this.deletarPorId(query, [id]);
    }


    /**
     * ATUALIZA pelo ID
     * @param {string} id 
     * @param {any} data 
    */
    static async AtualizarClientePorId(id, data) {
      const query = `
      UPDATE CLIENTES SET NOME = ?, EMAIL = ?, TELEFONE = ? WHERE ID_CLIENTE = ?
      `;
      const values = [data.nome, data.email, data.telefone, id];
      await this.atualizarPorId(query, values);
}

}

export default AutoresDAO;