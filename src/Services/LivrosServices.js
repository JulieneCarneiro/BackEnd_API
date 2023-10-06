import LivrosRepository from "../Repository/LivrosRepository.js";

class LivrosServices {


    static async validaTitulo(titulo) {
        const nomeTitulo = await LivrosRepository.buscarLivroPorTitulo(titulo);
        if (!nomeTitulo && typeof titulo === "string" && titulo.length > 2) {
            return true;
        } else {
            throw new Error("Título já cadastrado.");
        }
    }


    static validaPreco(preco) {
        return typeof preco === "number" && preco >= 0;
    }

    static validaIdioma(idioma) {
        return typeof idioma === "string" && idioma.length > 2;
    }

    static validaCamposLivro(titulo, preco, idioma) {
        try {
            LivrosServices.validaTitulo(titulo)
            LivrosServices.validaPreco(preco)
            LivrosServices.validaIdioma(idioma)
        } catch (error) {
            throw error

        }
    }
}
export default LivrosServices;
