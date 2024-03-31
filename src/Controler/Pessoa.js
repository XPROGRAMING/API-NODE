import { openDB } from "../configDB.js"; //aqui importo a funcao assincrona chamada createTable

export async function createTable(){
    openDB().then(db => { //a funcao openDB é chamada, quando a promessa é resolvida, o codigo 
        //dentro da funcao de retorno de then é executado then serve para tratar o resultado que deu certo
        //o catch() para tratar qualquer erro que ocorra durnte a execucao da promessa
        //promisse é um objeto que representa o resultado evenetual de uma operacao assincrona
        db.exec('CREATE TABLE IF NOT EXISTS Pessoa( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)')
    })
}

export async function insertPessoa(pessoa){
    openDB().then(db => { 
        db.run('INSERT INTO Pessoa (nome,idade) VALUES (?,?)', [pessoa.nome, pessoa.idade])
        // Values(?,?) -> serve para monstrar onde os valores fornecidos devem ser inseridos 
    })
}