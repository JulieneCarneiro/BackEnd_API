
import PedidosDAO from "../DAO/PedidosDAO.js"
import LivrosDAO from "../DAO/LivrosDAO.js"

class ValidacaoServicesPedidos{
    /**
     * Método que valida a existencia do usuário na base de dados
     * @param {string} id 
     * @returns {boolean}
     */
    static validarExistenciaPedido(id){
        const pedido = PedidosDAO.buscarPedidoPorId(id)
        if(pedido){
            return true
        } else {
            return false
        }
    }

    /**
     * Método de validação de nome
     * @param {string} titulo 
     * @returns {boolean}
     */
    static validaTitulo(titulo){
        return typeof titulo == "string" && titulo.length > 2
    }

    /**
   * Método de validação de título para verificar se o título já existe no banco de dados.
   * @param {string} titulo 
   * @returns {boolean}
   */
    static async tituloExisteNoBancoDeDados(titulo) {
    // Consulte o banco de dados para verificar se o título já existe
    const livro = await LivrosDAO.buscarLivroPorTitulo(titulo);
    return livro !== null;
  }

    /**
     * Método de validação de pagamento
     * @param {string} pagamento 
     * @returns {boolean}
     */
    static validaPagamento(pagamento) {
        const opcoesValidas = ["Boleto", "PIX", "Credito", "Débito"];
        return opcoesValidas.includes(pagamento);
      }



    /**
     * Método para validação de todos os campos fornecidos pelo cliente na entidade usuário
     * @param {string} titulo 
     * @param {string} pagamento 
     * @returns 
     */
    static validaCamposPedido(titulo, pagamento){
        const isValid = this.validaTitulo(titulo) && this.validaPagamento(pagamento) && this.tituloExisteNoBancoDeDados(titulo)
        return isValid
    }
}

export default ValidacaoServicesPedidos

  
    
  
    //   if (!this.validaTitulo(titulo)) {
    //     errors.push("O campo 'TITULO' deve ser uma string com pelo menos 3 caracteres.");
    //   }
  
    //   if (!this.validaPagamento(pagamento)) {
    //     errors.push("O campo 'PAGAMENTO' deve ser uma das opções válidas: 'Boleto', 'PIX', 'Credito' ou 'Débito'.");
    //   }
  
    //   return errors;
   

// class ValidacaoLivros {
//     // Método para validar a inserção de dados de livro
//     static validaInsercaoLivro(livroModelado) {
//         // Verifica se livroModelado é um objeto válido
//         if (!livroModelado || typeof livroModelado !== 'object') {
//             throw new Error('Dados de livro inválidos.');
//         }

//         // Verifica se o título do livro é uma string válida e obrigatória
//         if (!livroModelado.titulo || typeof livroModelado.titulo !== 'string') {
//             throw new Error('Título do livro é obrigatório e deve ser uma string.');
//         }

//         // Verifica se o autor do livro é uma string válida e obrigatória
//         if (!livroModelado.autor || typeof livroModelado.autor !== 'string') {
//             throw new Error('Autor do livro é obrigatório e deve ser uma string.');
//         }

//         // Verifica se o gênero do livro é uma string válida e obrigatória
//         if (!livroModelado.genero || typeof livroModelado.genero !== 'string') {
//             throw new Error('Gênero do livro é obrigatório e deve ser uma string.');
//         }

//         // Verifica se o número de páginas do livro é um número válido e obrigatório
//         if (
//             !livroModelado.paginas ||
//             typeof livroModelado.paginas !== 'number' ||
//             livroModelado.paginas <= 0
//         ) {
//             throw new Error(
//                 'Número de páginas do livro é obrigatório e deve ser um número maior que zero.'
//             );
//         }


//         return true;
//     }
// }

