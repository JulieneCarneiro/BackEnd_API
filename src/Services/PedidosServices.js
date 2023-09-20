class ValidacaoLivros {
    // Método para validar a inserção de dados de livro
    static validaInsercaoLivro(livroModelado) {
        // Verifica se livroModelado é um objeto válido
        if (!livroModelado || typeof livroModelado !== 'object') {
            throw new Error('Dados de livro inválidos.');
        }

        // Verifica se o título do livro é uma string válida e obrigatória
        if (!livroModelado.titulo || typeof livroModelado.titulo !== 'string') {
            throw new Error('Título do livro é obrigatório e deve ser uma string.');
        }

        // Verifica se o autor do livro é uma string válida e obrigatória
        if (!livroModelado.autor || typeof livroModelado.autor !== 'string') {
            throw new Error('Autor do livro é obrigatório e deve ser uma string.');
        }

        // Verifica se o gênero do livro é uma string válida e obrigatória
        if (!livroModelado.genero || typeof livroModelado.genero !== 'string') {
            throw new Error('Gênero do livro é obrigatório e deve ser uma string.');
        }

        // Verifica se o número de páginas do livro é um número válido e obrigatório
        if (
            !livroModelado.paginas ||
            typeof livroModelado.paginas !== 'number' ||
            livroModelado.paginas <= 0
        ) {
            throw new Error(
                'Número de páginas do livro é obrigatório e deve ser um número maior que zero.'
            );
        }


        return true;
    }
}

