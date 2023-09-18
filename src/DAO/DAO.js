import Database from "../database/Database.js";

class DAO{
    /**
     * INSERE
     * @param {string} query 
     * @param {Array<any>} data 
     */
    static inserir(query, data){
        return new Promise((resolve, reject)=>{
            Database.run(query, data, (error)=>{
                if(error){
                    console.log(error)
                    reject(error)
                }
                resolve({error:false})
            })
        })
    }

    /**
     * BUSCA
     * @param {string} entidade 
     * @returns {any}
     */
    static buscar(entidade){
        const query = `
        SELECT * FROM ${entidade};
        `
        return new Promise((resolve, reject)=>{
            Database.all(query, (error, rows)=>{
                if(error){
                    console.log(error)
                } else {
                    resolve(rows)
                }
            })
        })
    }

    /**
     * BUSCA por ID
     * @param {string} entidade 
     * @param {string} id 
     * @returns {any}
     */
    static buscarPorId(entidade, id){
        return Database[entidade][id]
    }

    /**
     * DELETA por ID
     * @param {string} entidade 
     * @param {string} id 
     */
    static deletarPorId(entidade, id){
        delete Database[entidade][id]
    }

    /**
     * ATUALIZA por ID
     * @param {string} entidade 
     * @param {string} id 
     * @param {any} data 
     */
    static atualizarPorId(entidade, id, data){
        Database[entidade][id] = data
    }
}

export default DAO;