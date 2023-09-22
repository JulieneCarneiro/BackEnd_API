import Livros from "../models/Livros.js";
import DAO from "./DAO.js";


class LivrosDAO extends DAO{
    /**
     * INSERE dados nos LIVROS
     * @param {Livros} data 
     */
    static async inserirLivro(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO LIVROS (ID, TITULO, PRECO, AUTOR, GENERO, EDITORA, IDIOMA) VALUES (?,?,?,?,?,?,?) 
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
      * @returns {Livros}
      */
    static async buscarLivroPorId(id) {
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
    ///////////com validaçãozinha
    static async buscarLivrosPorGenero(genero) {
      // Converte o valor do argumento e o valor da coluna para letras minúsculas
      genero = genero.toLowerCase();
      const query = `
        SELECT * FROM LIVROS WHERE LOWER(GENERO) LIKE ?
      `;
      const result = await this.buscarPorId(query, [`%${genero}%`]); // Usa LIKE para correspondência parcial
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
    static async atualizarLivroPorId(id, data) {
      const query = `
      UPDATE LIVROS SET TITULO = ?, PRECO = ?, AUTOR = ?, GENERO = ?, EDITORA = ?, IDIOMA = ? WHERE ID = ?
      `;
      const values = [data.TITULO, data.PRECO, data.AUTOR, data.GENERO, data.EDITORA, data.IDIOMA, id];
      await this.atualizarPorId(query, values);
    }

/**
   * Busca um livro pelo título.
   * @param {string} titulo 
   * @returns {Livros | null}
   */
static async buscarLivroPorTitulo(titulo) {
  const query = `
    SELECT * FROM LIVROS WHERE TITULO = ?
  `;
  const result = await this.buscarPorId(query, [titulo]);
  return result;
}

}
export default LivrosDAO;