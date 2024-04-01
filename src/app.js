//import { openDB } from './configDB.js'
import { createTable, insertPessoa, updatePessoa } from './Controler/Pessoa.js'
import express from 'express'
const app = express()
app.use(express.json())

createTable()
//rota raiz
app.get('/', (req, res) =>{
    res.send("teste")
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


app.listen(3000,() => console.log("Api Rodando"))