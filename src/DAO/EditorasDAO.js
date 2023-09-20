import Editoras from "../models/Editoras.js";
import DAO from "./DAO.js";

//const CLIENTES_TABELA = "CLIENTES" // NAO ENTENDI PRA Q Q SERVE ISSO??????

class EditorasDAO extends DAO{
    /**
     * INSERIR DADOS na tabela AUTORES
     * @param {Editoras} data 
     */
    ////////////////////// ESSE AQUI TA FUNCIONANDO AMÉM
    static async inserirEditora(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO EDITORAS (ID, NOME, EMAIL, TELEFONE) VALUES (?,?,?,?)
        `
        const result = await this.inserir(query, dataValues)
        return result
    }

    /**
     * BUSCA TUDO pelo ID
     * @returns {Array<Editoras>}
     */
    static async buscarTodasAsEditoras() {
      const query = `
      SELECT * FROM EDITORAS
      `;
      const result = await this.buscar(query);
      return result;
    }


    /**
      * BUSCA pelo ID
      * @param {string} id 
      * @returns {Editoras}
      */
    static async buscarEditoraPorId(id) {
      const query = `
      SELECT * FROM EDITORAS WHERE ID_EDITORA = ?
      `;
      const result = await this.buscarPorId(query, [id]);
      return result;
    }

    /**
      * DELETA pelo ID 
      * @param {string} id 
      */
    static async deletarEditoraPorId(id) {
      const query = `
      DELETE FROM EDITORAS WHERE ID_EDITORA = ?
      `;
      await this.deletarPorId(query, [id]);
    }


    /**
     * ATUALIZA pelo ID
     * @param {string} id 
     * @param {any} data 
    */
    static async AtualizarEditoraPorId(id, data) {
      const query = `
      UPDATE EDITORAS SET NOME = ?, EMAIL = ?, TELEFONE = ? WHERE ID_EDITORA = ?
      `;
      const values = [data.nome, data.email, data.telefone, id];
      await this.atualizarPorId(query, values);
}

}

export default EditorasDAO;