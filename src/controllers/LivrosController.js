import Livros from "../models/Livros.js"
import LivrosDAO from '../DAO/LivrosDAO.js';
import ValidacaoServicesLivros from "../services/LivrosServices.js";

class LivrosController {
  /**
   *
   * @param {Express} app
   */
  static rotas(app) {
    /**
     * BUSCA TODOS os LIVROS
     */
    app.get("/livros", async (req, res) => {
      try {
      const livros = await LivrosDAO.buscarTodosOsLivros();
      res.status(200).json(livros);} catch (error) {
        if (error instanceof Error) {
          res.status(500).json({
            error: true,
            message: "Nenhum livro encontrado", //mas dai aqui tem q ter outra msg
            details: error.message,            // detalhes do erro?? pensar nisso!!!!!!!!
          });
        } else {
          
          res.status(500).json({
            error: true,
            message: "Ocorreu um erro ao buscar os livros.",
          });
        }
      }
    });


app.get("/livros/:id", async (req, res) => {
  const id = req.params.id;
  const resposta = await LivrosDAO.buscarLivroPorId(id);
  if (resposta) {
    res.status(200).json(resposta);
  } else {
    res
      .status(404)
      .json({
        error: true,
        message: `Livro com o id ${id} não encontrado`,
      });
  }
});

/**
     * BUSCA pelo genero                        ///////////SEM VALIDAÇÃO TA FUNCIONANDOOOOOOOOOOOOO
     */
app.get("/livros/genero/:genero", async (req, res) => {
  const genero = req.params.genero;
  const resposta = await LivrosDAO.buscarLivrosPorGenero(genero);
  if (resposta) {
    res.status(200).json(resposta);
  } else {
    res.status(404).json({
      error: true,
      message: `Não encontramos livros no gênero ${genero}`,
    });
  }
});
/**
     * BUSCA pelo autor                        ///////////SEM VALIDAÇÃO TA FUNCIONANDOOOOOOOOOOOOO
     */
app.get("/livros/autor/:autor", async (req, res) => {
  const genero = req.params.genero;
  const resposta = await LivrosDAO.buscarLivrosPorGenero(genero);
  if (resposta) {
    res.status(200).json(resposta);
  } else {
    res
      .status(404)
      .json({
        error: true,
        message: `Não encontramos livros no gênero ${genero}`,
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
app.post("/livros", async (req, res) => {
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
app.put("/livro/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const exists = await ValidacaoServicesLivros.validarExistenciaLivro(id);
  // const isValid = ValidacaoServices.validaCamposUnidade(body.NOME, body.EMAIL, body.TELEFONE, body.ENDERECO);

      if (exists) {
          const unidadeModelada = new Livros(body.TITULO, body.PRECO, body.AUTOR, body.GENERO, body.EDITORA, body.IDIOMA);
          LivrosDAO.atualizarLivroPorId(id, unidadeModelada);
          res.status(204).json({ error: false, message: `Livro inserido com sucesso`});
      } else {
          res.status(400).json({ error: true, message: `Campos inválidos` });
      }
});

app.patch("/livros/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  try {
    // Verifique se o livro existe
    const livroExistente = await LivrosDAO.buscarLivroPorId(id);

    if (!livroExistente) {
      return res.status(404).json({ error: true, message: `Livro não encontrado para o id ${id}` });
    }

    // Valide os campos fornecidos na solicitação
    if (!ValidacaoServicesLivros.validaCamposLivro(body.TITULO, body.PRECO )) {
      return res.status(400).json({ error: true, message: `Campos inválidos` });
    }

    // Atualize apenas as propriedades fornecidas na solicitação
    if (body.TITULO) {
      livroExistente.TITULO = body.TITULO;
    }
    if (body.PRECO) {
      livroExistente.PRECO = body.PRECO;
    }

    // Salve as alterações no banco de dados
    await LivrosDAO.atualizarLivroPorId(id, livroExistente);

    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(503).json({ error: true, message: `Servidor indisponível no momento` });
  }
});




}}

export default LivrosController;


