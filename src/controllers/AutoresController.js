import Autores from "../models/Autores.js"; 
import AutoresDAO from "../DAO/AutoresDAO.js";
import ValidacaoServicesAutor from "../services/AutoresServices.js";

class AutoresController {
  /**
   * Método para centralização de rotas no controller
   * @param {Express} app
   */
  static rotas(app) {
    
    /**
     * BUSCA TUDO
     */
    app.get("/autores", async (req, res) => {
      try {
        // verifica se existem autores no banco de dados
        const autores = await AutoresDAO.buscarTodosOsAutores();
        if (autores) {
          res.status(200).json(autores);
        } else { 
          // Se não existirem autores, retorna um erro 404
          res.status(404).json({
            error: true,
            message: "Nenhum autor encontrado",
          });
        }
      } catch (error) {
        // se não encontrar o autor (caso inesperado), retorna um erro 500
        res.status(500).json({
          error: true,
          message: "Ocorreu um erro ao buscar os autores",
        });
      }
    });
    

    /**
     * BUSCA pelo ID                        
     */
    app.get("/autores/:id", async (req, res) => {
      const id = req.params.id;
      // Verifica se o autor com o ID existe
      const exists = await ValidacaoServicesAutor.validarExistenciaAutor(id);
      if (exists) {
        // se o autor existe, executa a busca
        const resposta = await AutoresDAO.buscarAutorPorId(id);
        if (resposta) {
          // se encontrar o autor, retorna os dados dele
          res.status(200).json(resposta);
        } else {
          // se não encontrar o autor (caso inesperado), retorna um erro 500
          res.status(500).json({
            error: true,
            message: `Ocorreu um erro ao buscar o autor com o ID ${id}`,
          });
        }
      } else {
        // se o autor não existe, retorna um erro 404
        res.status(404).json({ error: true, message: `Autor não encontrado para o ID ${id}` });
      }
    });


    /**    
    //* DELETA por ID       
    */
    app.delete("/autores/:id", async (req, res) => {
      const id = req.params.id;
      const exists = await ValidacaoServicesAutor.validarExistenciaAutor(id);
      if (exists) {
        // se o autor existe, confirma
        AutoresDAO.deletarAutorPorId(id);
        res.status(200).json({ error: false, message: `Autor deletado com sucesso!` });
      } else {
        // Se o autor não existe, retorna erro 404
        res.status(404).json({ error: true, message: `Autor não encontrado para o ID ${id}` });
      }
    });


    /**
     * INSERE                          
     */
    app.post("/autores", async (req, res) => {
      const body = req.body;
      if (!ValidacaoServicesAutor.validaAutor(body.NOME, body.PAIS, body.LIVROS)) {
        return res.status(400).json({ error: true, message: "Campos inválidos na solicitação" });
      }
      try {
        await AutoresDAO.inserirAutor(body);
        res.status(201).json({
          error: false,
          message: "Autor inserido com sucesso!",
        });
      } catch (error) {
        // tratamento do erro 409, quando um ID igual já existe 
        console.error("Erro no servidor:", error);
        res.status(409).json({ error: true, message: "Já existe um ID com o mesmo valor único" });
      }
    });
  }
}

export default AutoresController;
