import Generos from '../models/Generos.js'
import GenerosDAO from '../DAO/GenerosDAO.js';

class GenerosController {
  /**
   * Método para centralização de rotas no controller
   * @param {Express} app
   */
  static rotas(app) {
    
    /**
     * BUSCA TUDO
     */
    app.get("/generos", async (req, res) => {
      try {
      const generos = await GenerosDAO.buscarTodosOsGeneros();
      res.status(200).json(generos);} catch (error) {
        if (error instanceof Error) {
          res.status(500).json({
            error: true,
            message: "Nenhum gênero encontrado", 
            details: error.message,
          });
        } else {
          
          res.status(500).json({
            error: true,
            message: "Ocorreu um erro ao buscar os gêneros.",
          });
        }
      }
    });
    /**
     * BUSCA pelo ID                      
     */
    app.get("/generos/:id", async (req, res) => {
      const id = req.params.id;
      const resposta = await GenerosDAO.buscarGeneroPorId(id);
      if (resposta) {
        res.status(200).json(resposta);
      } else {
        res.status(404).json({
          error: true,
          message: `Genero com o id ${id} não encontrada`,
        });
      }
    });

    /**    
    //* DELETA por ID                     
    */
    app.delete("/generos/:id", async (req, res) => {
      const id = req.params.id;
      GenerosDAO.deletarGeneroPorId(id);
      res.status(200).json({ error: false });
    });

    /**
     * INSERE                      
     */
    app.post("/generos", async (req, res) => {
      const body = Object.values(req.body);
      const novoGenero = new Generos(...body);
      try {
        await GenerosDAO.inserirGenero(novoGenero);
        res.status(201).json({
          error: false,
          message: "Genero inserido com sucesso!",
        });
      } catch (error) {
        res
          .status(503)
          .json({ error: true, message: `Servidor indisponível no momento` });
      }
    });
  }
}

export default GenerosController;
