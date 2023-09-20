class ValidacoesGeneros {
    static validaId(id) {
        // Verifica se o ID é uma string válida
        if (!id || typeof id !== 'string') {
            throw new Error('ID de gênero inválido');
        }
    }

    static validaInsercaoGenero(body) {
        // Verifica se o objeto body é válido e contém as propriedades obrigatórias
        if (
            !body ||
            typeof body !== 'object' ||
            !body.nome ||
            typeof body.nome !== 'string' ||
            !body.descricao ||
            typeof body.descricao !== 'string'
        ) {
            throw new Error('Dados de gênero inválidos');
        }
    }
}
