import Pedidos from "../models/Pedidos.js"
import PedidosDAO from '../DAO/PedidosDAO.js';
import ValidacaoServicesPedidos from '../services/PedidosServices.js'


class PedidosController {
  /**
   *
   * @param {Express} app
   */
  static rotas(app) {
    /**
     * BUSCA TODOS os LIVROS
     */
    app.get("/pedidos", async (req, res) => {
      try {
      const pedidos = await PedidosDAO.buscarTodosOsPedidos();
      res.status(200).json(pedidos);} catch (error) {
        if (error instanceof Error) {
          res.status(500).json({
            error: true,
            message: "Nenhum pedido encontrado", //mas dai aqui tem q ter outra msg
            details: error.message,            // detalhes do erro?? pensar nisso!!!!!!!!
          });
        } else {
          res.status(500).json({
            error: true,
            message: "Ocorreu um erro ao buscar os pedidos.",
          });
        }
      }
    });

/**
     * BUSCA pelo genero                        ///////////SEM VALIDAÇÃO TA FUNCIONANDOOOOOOOOOOOOO
     */
app.get("/pedidos/:pagamento", async (req, res) => {
  const pagamento = req.params.pagamento;
  const resposta = await PedidosDAO.buscarPedidosPorPagamento(pagamento);
  if (resposta) {
    res.status(200).json(resposta);
  } else {
    res
      .status(404)
      .json({
        error: true,
        message: `Não encontramos pedidos com o pagamento ${pagamento}`,
      });
  }
});

/**
 * DELETA por ID                      ///////////SEM VALIDAÇÃO TA FUNCIONANDO --- MAS DA PRA MELHORAR A RESPOSTA
 */
app.delete("/livros/:id", async (req, res) => {
  const id = req.params.id;
  LivrosDAO.deletarLivroPorId(id);
  res.status(200).json({ error: false, message: `Livro excluído com sucesso!` });
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
app.put("/pedidos/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const exists = await ValidacaoServicesPedidos.validarExistenciaPedido(id);
  // const isValid = ValidacaoServices.validaCamposUnidade(body.NOME, body.EMAIL, body.TELEFONE, body.ENDERECO);

      if (exists) {
          const unidadeModelada = new Pedidos(body.CLIENTE, body.TITULO, body.QUANTIDADE, body.VALOR, body.PAGAMENTO);
          PedidosDAO.atualizarPedidoPorId(id, unidadeModelada);
          res.status(204).json({ error: false, message: `Cliente inserido com sucesso`});
      } else {
          res.status(400).json({ error: true, message: `Campos inválidos` });
      }
});

}}

export default PedidosController;
