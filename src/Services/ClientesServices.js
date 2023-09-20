
class ValidacaoClientes {
    // Classe de validação para Clientes

    // Método para validar a inserção de dados do cliente
    static validaInsercaoCliente(clienteModelado) {
        // Verifica se clienteModelado é um objeto válido
        if (!clienteModelado || typeof clienteModelado !== "object") {
            throw new Error("Dados do cliente inválidos.");
        }

        // Verifica se o nome do cliente é uma string válida e obrigatória
        if (!clienteModelado.nome || typeof clienteModelado.nome !== "string") {
            throw new Error("Nome do cliente é obrigatório e deve ser uma string.");
        }

        // Verifica se o e-mail do cliente é uma string válida e obrigatória
        if (!clienteModelado.email || typeof clienteModelado.email !== "string") {
            throw new Error("E-mail do cliente é obrigatório e deve ser uma string.");
        }

        // Verifica se o telefone do cliente é uma string válida e obrigatória
        if (!clienteModelado.telefone || typeof clienteModelado.telefone !== "string") {
            throw new Error("Telefone do cliente é obrigatório e deve ser uma string.");
        }

        // Verifica se o endereço do cliente é uma string válida e obrigatória
        if (!clienteModelado.endereco || typeof clienteModelado.endereco !== "string") {
            throw new Error("Endereço do cliente é obrigatório e deve ser uma string.");
        }



        return true; // Os dados são válidos
    }
}
