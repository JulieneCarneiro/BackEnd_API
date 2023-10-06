import EditorasRepository from "../Repository/EditorasRepository.js"

class EditorasServices {

    static async validaNome(nome) {
        const editora = await EditorasRepository.buscarEditoraPorNome(nome);
        if (!editora && nome.length > 2) {
            return true;
        } else {
            throw new Error("Editora já cadastrada.");
        }
    }

    static async validaEmail(email) {
        const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        if (regex.test(email)) {
            const VerificaEditora = await EditorasRepository.buscarEditoraPorEmail(email)
            if (VerificaEditora) {
                throw new Error("Email já cadastrado.")
            }
            return true

        }

        throw new Error("Email inválido, favor rever a requisição.")

    }

    static validaTelefone(telefone) {
        const tel = parseInt(telefone)
        if (tel != telefone || telefone.length < 10 || telefone.length > 12) {
            throw new Error("Telefone inválido, favor rever a requisição.")
        }

        return true
    }
   
    static async validaCamposEditora(nome, email, telefone) {
        try {
            await EditorasServices.validaNome(nome) 
                EditorasServices.validaEmail(email) 
                EditorasServices.validaTelefone(telefone);
        } catch (error) {
            throw error
        }
    }
}

export default EditorasServices;
