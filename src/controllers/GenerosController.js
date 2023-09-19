import express from 'express';
import GenerosDAO from '../DAO/GenerosDAO.js';

const router = express.Router();
const generosDAO = new GenerosDAO();

router.get('/', async (req, res) => {
  try {
    const generos = await generosDAO.buscarTodosOsGeneros();
    res.status(200).json(generos);
  } catch (error) {
    res.status(500).json({ error: true, message: 'Erro ao buscar generos' });
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const genero = await generosDAO.buscarGeneroPorId(id);
    if (genero) {
      res.status(200).json(genero);
    } else {
      res.status(404).json({
        error: true,
        message: `Genero com o id ${id} não encontrado`,
      });
    }
  } catch (error) {
    res.status(500).json({ error: true, message: 'Erro ao buscar genero por ID' });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await generosDAO.deletarGeneroPorId(id);
    res.status(200).json({ error: false });
  } catch (error) {
    res.status(500).json({ error: true, message: 'Erro ao deletar genero por ID' });
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  try {
    const generoInserido = await generosDAO.inserirGenero(body);
    res.status(201).json({
      error: false,
      message: 'Genero inserido com sucesso!',
      genero: generoInserido,
    });
  } catch (error) {
    res.status(500).json({ error: true, message: 'Erro ao inserir genero' });
  }
});

export default router;
