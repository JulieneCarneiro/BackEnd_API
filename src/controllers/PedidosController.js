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
     * BUSCA pelo ID                    
     */
    app.get("/pedidos/:id", async (req, res) => {
      const id = req.params.id;
    
      try {
        // Verifica se o pedido existe
        const pedidoExistente = await PedidosDAO.buscarPedidoPorId(id);
    
        if (!pedidoExistente) {
          return res.status(404).json({ error: true, message: `Pedido não encontrado para o id ${id}` });
        }
    
        res.status(200).json(pedidoExistente);
      } catch (error) {
        res.status(503).json({ error: true, message: `Servidor indisponível no momento` });
      }
    });
    

/**
     * BUSCA pelo pagto               
     */
app.get("/pedidos/pagamento/:pagamento", async (req, res) => {
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
app.delete("/pedidos/:id", async (req, res) => {
  const id = req.params.id;
  PedidosDAO.deletarPedidoPorId(id);
  res.status(200).json({ error: false, message: `Livro excluído com sucesso!` });
});

/**
 * INSERE              
 */
  app.post("/pedidos", async (req, res) => {
  const body = req.body;

  if (!ValidacaoServicesPedidos.validaCamposPedido(body.TITULO, body.PAGAMENTO)) {
    return res.status(400).json({ error: true, message: `Campos inválidos` });
  }
  try {
    const exists = await ValidacaoServicesPedidos.validarExistenciaPedido(body.ID);
    if (exists) {
      const pedidoModelado = new Pedidos(body.ID, body.CLIENTE, body.TITULO, body.QUANTIDADE, body.VALOR, body.PAGAMENTO);
      await PedidosDAO.inserirPedido(pedidoModelado);
      res.status(201).json({
        error: false,
        message: "Pedido criado com sucesso!"
      });
    } else {
      res.status(400).json({ error: true, message: `Pedido não encontrado` });
    }
  } catch (error) {
    console.error("Erro no servidor:", error);
    res.status(503).json({ error: true, message: `Servidor indisponível no momento` });
  }
});




// /**
//  * ATUALIZA por ID             
//  */
app.put("/pedidos/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  try {
    const exists = await ValidacaoServicesPedidos.validarExistenciaPedido(id);

    if (exists) {
      const unidadeModelada = new Pedidos(body.CLIENTE, body.TITULO, body.QUANTIDADE, body.VALOR, body.PAGAMENTO);
      PedidosDAO.atualizarPedidoPorId(id, unidadeModelada);
      res.status(204).json({ error: false, message: `Cliente inserido com sucesso` });
    } else {
      console.error("Erro no servidor:", error);
      res.status(400).json({ error: true, message: `Campos inválidos` });
    }
  } catch (error) {
    console.error("Erro no servidor:", error);
    res.status(503).json({ error: true, message: `Servidor indisponível no momento` });
  }
});

}}

export default PedidosController;
