import Livros from "../models/Livros.js";
import DAO from "./DAO.js";


class LivrosDAO extends DAO{
    /**
     * INSERE dados nos LIVROS
     * @param {Livros} data 
     */
    ////////////////////// ESSE AQUI TA FUNCIONANDO TAOKEI   ////////MAS OLHAR SE PRECISA ATUALIZAR ASLGUMAS COISAS
    static async inserirLivro(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO GENERO (TITULO, PRECO, AUTOR, GENERO, EDITORA, IDIOMA) VALUES (?,?,?,?,?,?) 
        `
        const result = await this.inserir(query, dataValues)
        return result
    }

    /**
     * BUSCA todos os LIVROS
     * @returns {Array<Livros>}
     */
    static async buscarTodosOsLivros() {
      const query = `
      SELECT * FROM LIVROS
      `;
      const result = await this.buscar(query);
      return result;
    }


    /**
      * BUSCA livros por ID
      * @param {string} id 
      * @returns {Generos}
      */
    static async buscarLivrosPorId(id) {
      const query = `
      SELECT * FROM LIVROS WHERE ID = ?
      `;
      const result = await this.buscarPorId(query, [id]);
      return result;
    }

     /**
      * BUSCA livros por GENERO
      * @param {string} genero 
      * @returns {Generos}
      */
     static async buscarLivrosPorGenero(genero) {
      const query = `
      SELECT * FROM LIVROS WHERE GENERO = ?
      `;
      const result = await this.buscarPorId(query, [genero]);
      return result;
    }


    /**
      * DELETA livro por ID
      * @param {string} id 
      */
    static async deletarLivrosPorId(id) {
      const query = `
      DELETE FROM LIVROS WHERE ID = ?
      `;
      await this.deletarPorId(query, [id]);
    }


    /**
     * ATUALIZA livro por ID
     * @param {string} id 
     * @param {any} data 
    */
    static async AtualizarLivroPorId(id, data) {
      const query = `
      UPDATE GENEROS SET TITULO, PRECO, AUTOR, GENERO, EDITORA, IDIOMA WHERE ID = ?
      `;
      const values = [data.livros, data.nome, id];
      await this.atualizarPorId(query, values);
}}

export default LivrosDAO;