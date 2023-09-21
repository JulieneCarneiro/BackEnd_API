import Editoras from "../models/Editoras.js"; 
import EditorasDAO from "../DAO/EditorasDAO.js";

class EditorasController {
  /**
   * Método para centralização de rotas no controller
   * @param {Express} app
   */
  static rotas(app) {
    
    /**
     * BUSCA TUDO
     */
    app.get("/editoras", async (req, res) => {
      const editoras = await EditorasDAO.buscarTodasAsEditoras();
      res.status(200).json(editoras);
    });

    /**
     * BUSCA pelo ID                      
     */
    app.get("/editoras/:id", async (req, res) => {
      const id = req.params.id;
      const resposta = await EditorasDAO.buscarEditoraPorId(id);
      if (resposta) {
        res.status(200).json(resposta);
      } else {
        res.status(404).json({
          error: true,
          message: `Editora com o id ${id} não encontrada`,
        });
      }
    });

    /**    
    //* DELETA por ID                     
    */
    app.delete("/editoras/:id", async (req, res) => {
      const id = req.params.id;
      EditorasDAO.deletarEditoraPorId(id);
      res.status(200).json({ error: false });
    });

    /**
     * INSERE                      
     */
    app.post("/editoras", async (req, res) => {
      const body = Object.values(req.body);
      const editoraModelada = new Editoras(...body);
      try {
        await EditorasDAO.inserirEditora(editoraModelada);
        res.status(201).json({
          error: false,
          message: "Editora inserida com sucesso!",
        });
      } catch (error) {
        res
          .status(503)
          .json({ error: true, message: `Servidor indisponível no momento` });
      }
    });
  }
}

export default EditorasController;
