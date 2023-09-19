import Autores from "../models/Autores.js" // NÃO UTILIZADO AINDA
import AutoresDAO from "../DAO/AutoresDAO.js"

class AutoresController{
  /**
   * Método para centralização de rotas no controller
   * @param {Express} app 
   */
  static rotas(app){
      /**
       * BUSCA TUDO 
       */
      app.get("/autores", async (req, res)=>{
          const autores = await AutoresDAO.buscarTodosOsAutores()
          res.status(200).json(autores)
      })
        
      
    /**
     * BUSCA pelo ID                        ///////////SEM VALIDAÇÃO, FUNCIONANDOOOOOOOOOOOOOOOOOOOO
     */
    app.get("/autores/:id", async (req, res) => {
      const id = req.params.id;
      const resposta = await AutoresDAO.buscarAutorPorId(id);
      if (resposta) {
        res.status(200).json(resposta);
      } else {
        res
          .status(404)
          .json({
            error: true,
            message: `Autor com o id ${id} não encontrado`,
          });
      }
    });
    /**    
    //* DELETA por ID                      ///////////SEM VALIDAÇÃO TA FUNCIONANDO --- MAS DA PRA MELHORAR A RESPOSTA
    */
    
   app.delete("/autores/:id", async (req, res) => {
     const id = req.params.id;
     AutoresDAO.deletarAutorPorId(id);
     res.status(200).json({ error: false, message: `Autor deletado com sucesso!`  });
   });

   /**
     * INSERE                           ///////////SEM VALIDAÇÃO TA FUNCIONANDOOOOOOOOOOOOO
     */
   app.post("/autores", async (req, res) => {
    const body = Object.values(req.body);
    const autorModelado = new Autores(...body);
    try {
      await AutoresDAO.inserirAutor(autorModelado);
      res.status(201).json({
        error: false,
        message: "Autor inserido com sucesso!",
      });
    } catch (error) {
      res
        .status(503)
        .json({ error: true, message: `Servidor indisponível no momento` });
    }
  });
  }}

export default AutoresController