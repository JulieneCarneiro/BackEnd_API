import express from 'express';
import LivrosDAO from '../DAO/LivrosDAO.js';

const router = express.Router();
const livrosDAO = new LivrosDAO();

router.get('/', async (req, res) => {
  try {
    const livros = await livrosDAO.buscarTodosOsLivros();
    res.status(200).json(livros);
  } catch (error) {
    res.status(500).json({ error: true, message: 'Erro ao buscar livros' });
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const livros = await livrosDAO.buscarLivroPorId(id);
    if (livro) {
      res.status(200).json(livro);
    } else {
      res.status(404).json({
        error: true,
        message: `Livro com o id ${id} não encontrado`,
      });
    }
  } catch (error) {
    res.status(500).json({ error: true, message: 'Erro ao buscar livro por ID' });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await livrosDAO.deletarLivroPorId(id);
    res.status(200).json({ error: false });
  } catch (error) {
    res.status(500).json({ error: true, message: 'Erro ao deletar livro por ID' });
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  try {
    const livroInserido = await livrosDAO.inserirLivro(body);
    res.status(201).json({
      error: false,
      message: 'Livro inserido com sucesso!',
      livro: livroInserido,
    });
  } catch (error) {
    res.status(500).json({ error: true, message: 'Erro ao inserir livro' });
  }
});

export default router;
