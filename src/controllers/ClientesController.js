import Clientes from "../models/Clientes.js"; 
import ClientesDAO from "../DAO/ClientesDAO.js";
import ValidacaoServices from "../services/ClientesServices.js" //ENFIA NO CU

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


    app.get("/clientes/:id", async (req, res) => {
      const id = req.params.id;
      const isValid = await ValidacaoServices.validarExistencia(id) //CONFORME SINTAXE DO CODIGO DO LEO, VERIFICAR COM LUCIO
      if (isValid) {
          const resposta = await ClientesDAO.buscarClientePorId(id)
          if (resposta) { 
              res.status(200).json(resposta);
          } else {
              res.status(404).json({ error: true, message: `Cliente com o id ${id} não encontrado` });
          }
      } else {
          res.status(400).json({ error: true, message: `id inválido: ${id}` });
      }
    });


    // /**
    //  * BUSCA pelo ID                        ///////////SEM VALIDAÇÃO TA FUNCIONANDOOOOOOOOOOOOO
    //  */
    // app.get("/clientes/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const resposta = await ClientesDAO.buscarClientePorId(id);
    //   if (resposta) {
    //     res.status(200).json(resposta);
    //   } else {
    //     res
    //       .status(404)
    //       .json({
    //         error: true,
    //         message: `Cliente com o id ${id} não encontrado`,
    //       });
    //   }
    // });


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
          .json({ error: true, message: `Servidor indisponível no momento`}); 
      }
    });

// /**
//  * ATUALIZA por ID                        //NÃO SEI COMO ISSO FUNCIONA LALALALALALALLALAALALALALA
//  */
app.put("/clientes/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const exists = await ValidacaoServices.validarExistenciaCliente(id);
  // const isValid = ValidacaoServices.validaCamposUnidade(body.NOME, body.EMAIL, body.TELEFONE, body.ENDERECO);

      if (exists) {
          const unidadeModelada = new Clientes(body.NOME, body.EMAIL, body.TELEFONE, body.ENDERECO);
          ClientesDAO.atualizarClientePorId(id, unidadeModelada);
          res.status(204).json({ error: false, message: `Cliente inserido com sucesso`});
      } else {
          res.status(400).json({ error: true, message: `Campos inválidos` });
      }
});

}}

export default ClientesController;

