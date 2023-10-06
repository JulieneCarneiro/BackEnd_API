import ClientesRepository from "../Repository/ClientesRepository.js"

class ClientesServices {

    static async validaNome(nome) {
        const cliente = await ClientesRepository.buscarClientePorNome(nome);
        if (!cliente && nome.length > 2)  {
          return true;
        } else {
          throw new Error("Cliente já cadastrado.");
        }
      }
    
      static async validaEmail(email) {
        const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        if (regex.test(email)) {
            const VerificaCliente = await ClientesRepository.buscarClientePorEmail(email)
            if (VerificaCliente) {
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
  
  static validaEndereco(endereco) {
    return endereco.length >= 5;
  }

  static async validaCamposCliente(nome, email, telefone, endereco) {
    try {
       await ClientesServices.validaNome(nome) 
       ClientesServices.validaEmail(email) 
       ClientesServices.validaTelefone(telefone) 
       ClientesServices.validaEndereco(endereco);
    } catch (error) {
        throw error
    } 
  }
}

export default ClientesServices;
