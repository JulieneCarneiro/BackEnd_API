import Clientes from "../models/Clientes.js"; 
import ClientesDAO from "../DAO/ClientesDAO.js";
//import ValidacaoServices from "../../services/ValidacaoServices.js"; // NÃO UTILIZADO AINDA, PARTE DO LUCIO

class ClientesController {
  /**
   *
   * @param {Express} app
   */
  static rotas(app) {
    /**
     * BUSCA TODOS os CLIENTES
     */
    app.get("/clientes", async (req, res) => {
      try {
      const clientes = await ClientesDAO.buscarTodosOsClientes();
      res.status(200).json(clientes);} catch (error) {
        if (error instanceof Error) {
          res.status(500).json({
            error: true,
            message: "Nenhum autor encontrado", //mas dai aqui tem q ter outra msg
            details: error.message,            // detalhes do erro?? pensar nisso!!!!!!!!
          });
        } else {
          
          res.status(500).json({
            error: true,
            message: "Ocorreu um erro ao buscar os clientes.",
          });
        }
      }
    });

    /**
     * BUSCA pelo ID                        ///////////SEM VALIDAÇÃO TA FUNCIONANDOOOOOOOOOOOOO
     */
    app.get("/clientes/:id", async (req, res) => {
      const id = req.params.id;
      const resposta = await ClientesDAO.buscarClientePorId(id);
      if (resposta) {
        res.status(200).json(resposta);
      } else {
        res
          .status(404)
          .json({
            error: true,
            message: `Cliente com o id ${id} não encontrado`,
          });
      }
    });

    /**
     * DELETA por ID                      ///////////SEM VALIDAÇÃO TA FUNCIONANDO --- MAS DA PRA MELHORAR A RESPOSTA
     */
    app.delete("/clientes/:id", async (req, res) => {
      const id = req.params.id;
      ClientesDAO.deletarClientePorId(id);
      res.status(200).json({ error: false, message: `Cliente excluído com sucesso!` });
    });

    /**
     * INSERE                           ///////////SEM VALIDAÇÃO TA FUNCIONANDO
     */
    app.post("/clientes", async (req, res) => {
      const body = Object.values(req.body);
      const clienteModelado = new Clientes(...body);
      try {
        await ClientesDAO.inserirCliente(clienteModelado);
        res.status(201).json({
          error: false,
          message: "Cliente inserido com sucesso!",
        });
      } catch (error) {
        res
          .status(503)
          .json({ error: true, message: `Servidor indisponível no momento DEU ERRO PORRA` }); ///tira isso aqui PFV
      }
    });

// /**
//  * ATUALIZA por ID                        //NÃO SEI COMO ISSO FUNCIONA LALALALALALALLALAALALALALA
//  */
app.put("/clientes/:id", async(req, res) => {
  const id = req.params.id;
  const body = req.body;
  // res.status(500).json(message);
  const clientePut = new Clientes(body.NOME, body.EMAIL, body.TELEFONE, body.ENDERECO);
  await ClientesDAO.AtualizarClientePorId(id, clientePut)
    .then((result) => {
      if (result) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: true, message: `Erro interno.` });
      }
    })
    .catch((error) => {
      res.status(503).json({ error: true, message: `Servidor indisponível no momento` });
    });
});

}}

export default ClientesController;

