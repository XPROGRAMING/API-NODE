import { openDB } from "../configDB.js"; //aqui importo a funcao assincrona chamada createTable

export async function createTable(){

    /*
    if (!pessoa || !pessoa.nome || !pessoa.idade) {
        throw new Error('Os campos obrigatórios (nome e idade) não foram fornecidos.');
        !pessoa -> verifica se o objeto está vazio, ! siginifca negacao
        || operador logico "ou"
        throw serve ara lancar o erro de forma manualmente

    }
    */

    openDB().then(db => { //a funcao openDB é chamada, quando a promessa é resolvida, o codigo 
        //dentro da funcao de retorno de then é executado then serve para tratar o resultado que deu certo
        //o catch() para tratar qualquer erro que ocorra durnte a execucao da promessa
        //promisse é um objeto que representa o resultado evenetual de uma operacao assincrona
        db.exec('CREATE TABLE IF NOT EXISTS Pessoa( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)')
    })
}

export async function insertPessoa(pessoa){
    openDB()
    .then(db => { 
        db.run('INSERT INTO Pessoa (nome,idade) VALUES (?,?)', [pessoa.nome, pessoa.idade])
        // Values(?,?) -> serve para monstrar onde os valores fornecidos devem ser inseridos 
    })
    //para tratar excessao ao criar banco de dados
    /* .catch(error => {
        console.error('Erro ao abrir o banco de dados:', error);
        
    }); */
}

export async function updatePessoa(pessoa){
    openDB()
    .then(db => { 
        db.run('UPDATE Pessoa SET nome=? ,idade=? WHERE id=?', [pessoa.nome, pessoa.idade, pessoa.id])
        
    })
   
}