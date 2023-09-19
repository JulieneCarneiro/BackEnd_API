import Pedidos from "../models/Pedidos.js";
import DAO from "./DAO.js";


class PedidosDAO extends DAO{
    /**
     * INSERE dados nos PEDIDOS
     * @param {Pedidos} data 
     */
    ////////////////////// ESSE AQUI TA FUNCIONANDO TAOKEI
    static async inserirPedido(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO GENERO (NUM_PEDIDO, CLIENTE, TITULO, QUANTIDADE, VALOR, PAGAMENTO ) VALUES (?,?,?,?,?,?)
        `
        const result = await this.inserir(query, dataValues)
        return result
    }

    /**
     * BUSCA todos os PEDIDOS
     * @returns {Array<Pedidos>}
     */
    static async buscarTodosOsPedidos() {
      const query = `
      SELECT * FROM PEDIDOS
      `;
      const result = await this.buscar(query);
      return result;
    }


    /**
      * BUSCA pedidos por ID
      * @param {string} id 
      * @returns {Generos}
      */
    static async buscarPedidosPorId(id) {
      const query = `
      SELECT * FROM PEDIDOS WHERE ID = ?
      `;
      const result = await this.buscarPorId(query, [id]);
      return result;
    }

    /**
      * DELETA pedidos por ID
      * @param {string} id 
      */
    static async deletarPedidoPorId(id) {
      const query = `
      DELETE FROM PEDIDOS WHERE ID = ?
      `;
      await this.deletarPorId(query, [id]);
    }


    /**
     * ATUALIZA genero por ID
     * @param {string} id 
     * @param {any} data 
    */
    static async AtualizarPedidoPorId(id, data) {
      const query = `
      UPDATE PEDIDOS SET NUM_PEDIDO, CLIENTE, TITULO, QUANTIDADE, VALOR, PAGAMENTO , WHERE ID = ? 
      `;
      const values = [data.livros, data.nome, id];
      await this.atualizarPorId(query, values);
}}

export default PedidosDAO;