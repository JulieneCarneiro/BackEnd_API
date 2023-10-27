import ClientesRepository from "../Repository/ClientesRepository.js"

class ClientesServices {

  
static validaNome(nome){
      const regexNome = /^[a-zA-ZÀ-ú\s']+$/;
      if (regexNome.test(nome)){
          return true
      } else {
          throw new Error("Nome inválido, apenas letras")
      }
  }
static validaEndereco(endereco){
  if (endereco.length >= 3){
      return true
  } else {
      throw new Error("Endereço inválido, deve ter no mínimo 3 caracteres")
  }
}

static validaTelefone(telefone){
  const numeroLimpo = telefone.replace(/[^\d]/g, '');
  const telefoneInt = parseInt(numeroLimpo)
  const regexTelefone = /^[0-9]{10,11}$/

  if (regexTelefone.test(telefoneInt)){
      return true
  } else {
      throw new Error("Telefone inválido")
  }
}

static validaEmail(email) {
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regexEmail.test(email)) {
      return true;
  } else {
      throw new Error("E-mail inválido");
  }
}

static validaCamposCliente( nome, endereco, telefone, email){
  const isValid = this.validaNome(nome) && this.validaEndereco(endereco) && this.validaTelefone(telefone) && this.validaEmail(email)
  if (isValid) {
      return true;
  } else {
      throw new Error("Dados inválido para o cliente");
  }
}
}

export default ClientesServices;

//     static async validaNome(nome) {
//         const cliente = await ClientesRepository.buscarClientePorNome(nome);
//         if (!cliente && nome.length > 2)  {
//           return true;
//         } else {
//           throw new Error("Cliente já cadastrado.");
//         }
//       }

  
    
//       static async validaEmail(email) {
//         const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
//         if (regex.test(email)) {
//             const VerificaCliente = await ClientesRepository.buscarClientePorEmail(email)
//             if (VerificaCliente) {
//                 throw new Error("Email já cadastrado.")
//             }
//             return true

//         }

//         throw new Error("Email inválido, favor rever a requisição.")

//     }

//     static validaTelefone(telefone) {
//         const tel = parseInt(telefone)
//         if (tel != telefone || telefone.length < 10 || telefone.length > 12) {
//             throw new Error("Telefone inválido, favor rever a requisição.")
//         }

//         return true
//     }
  
//   static validaEndereco(endereco) {
//     return endereco.length >= 5;
//   }

//   static async validaCamposCliente(nome, email, telefone, endereco) {
//     try {
//        await ClientesServices.validaNome(nome) 
//        ClientesServices.validaEmail(email) 
//        ClientesServices.validaTelefone(telefone) 
//        ClientesServices.validaEndereco(endereco);
//     } catch (error) {
//         throw error
//     } 
//   }
// }