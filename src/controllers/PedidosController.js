import express from 'express';
import PedidosDAO from '../DAO/PedidosDAO.js';

const router = express.Router();
const pedidosDAO = new PedidosDAO();

router.get('/', async (req, res) => {
  try {
    const pedidos = await pedidosDAO.buscarTodosOsPedidos();
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ error: true, message: 'Erro ao buscar pedidos' });
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const pedidos = await pedidosDAO.buscarPedidoPorId(id);
    if (pedido) {
      res.status(200).json(pedido);
    } else {
      res.status(404).json({
        error: true,
        message: `Pedido com o id ${id} não encontrado`,
      });
    }
  } catch (error) {
    res.status(500).json({ error: true, message: 'Erro ao buscar pedido por ID' });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await pedidosDAO.deletarPedidoPorId(id);
    res.status(200).json({ error: false });
  } catch (error) {
    res.status(500).json({ error: true, message: 'Erro ao deletar pedido por ID' });
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  try {
    const pedidoInserido = await pedidosDAO.inserirPedido(body);
    res.status(201).json({
      error: false,
      message: 'Pedido inserido com sucesso!',
      pedido: pedidoInserido,
    });
  } catch (error) {
    res.status(500).json({ error: true, message: 'Erro ao inserir pedido' });
  }
});

export default router;
