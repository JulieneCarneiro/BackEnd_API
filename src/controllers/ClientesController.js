import Clientes from "../models/Clientes.js"; // NÃO UTILIZADO AINDA
import ClientesDAO from "../DAO/ClientesDAO.js";
import ValidacaoServices from "../../services/ValidacaoServices.js";

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
      const clientes = await ClientesDAO.buscarTodosOsClientes();
      res.status(200).json(clientes);
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
      res.status(200).json({ error: false });
    });

    /**
     * INSERE                           ///////////SEM VALIDAÇÃO TA FUNCIONANDOOOOOOOOOOOOO
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
          .json({ error: true, message: `Servidor indisponível no momento` });
      }
    });
  }}

export default ClientesController;
// class ClientesController {

//   static rotas(app) {

//     app.get("/clientes", (req, res)=>{
//       res.status(200).json(Clientes)
//     })

//       app.post("/clientes", (req, res)=>{
//         const body = Object.values(req.body)
//         const clienteModelado = new Clientes(...body)
//         ClientesDAO.inserirCliente(clienteModelado)
//         res.status(200).json({
//             error: false,
//             message: "DEU BOA FAMILIA"
//         })
//     })

//     //   app.post("/cliente", async (req, res)=>{
//     //     const body = Object.values(req.body)
//     //     const isValid = ValidacaoServices.validaCamposClientes(...body)
//     //     if(isValid){
//     //         const clienteModelado = new Clientes(...body)
//     //         try {
//     //             await ClientesDAO.inserirCliente(clienteModelado)
//     //             res.status(201).json({
//     //                 error: false,
//     //                 message: "Usuário criado com sucesso"
//     //             })
//     //             console.log("paçoca")
//     //         } catch (error) {
//     //             res.status(503).json({error: true, message: `Servidor indisponível no momento`})
//     //         }
//     //     } else {
//     //         res.status(400).json({error: true, message: `Campos invalidos`})
//     //     }
//     // })
//   }

