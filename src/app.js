//import { openDB } from './configDB.js'
import { createTable, insertPessoa, updatePessoa, selectPessoas, selectPessoa, deletePessoa } from './Controler/Pessoa.js'
import express from 'express'
const app = express()
app.use(express.json())

createTable()
//rota raiz
app.get('/', (req, res) =>{
    res.send("teste")
})
//para buscar todas as pessoas
app.get('/pessoas',  async (req, res) =>{
    let pessoas = await selectPessoas()
    res.json(pessoas)
    
})

//para buscar uma pessoa
app.get('/pessoa',  async (req, res) =>{
    let pessoa = await selectPessoa(req.body.id)
    res.json(pessoa)
    
})

//rota insert
app.post('/pessoa', (req,res) =>{
    insertPessoa(req.body)
    res.json({
        "statuscCode": 200
    })
})
//rota update 
app.put('/pessoa', (req,res) =>{
    if(req.body && !req.body.id){
        res.json({
            "statusCode":"400",
            "msg":"Voce precisa informar um id"
        })
    } else {
        updatePessoa(req.body)
        res.json({
            "statuscCode": 200
        })
    }
})
//deleta pessoa
app.delete('/pessoa',  async (req, res) =>{
    let pessoa = await deletePessoa(req.body.id)
    res.json(pessoa)
    
    
})


app.listen(3000,() => console.log("Api Rodando"))