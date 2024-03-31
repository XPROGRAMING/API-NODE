//import { openDB } from './configDB.js'
import { createTable, insertPessoa } from './Controler/Pessoa.js'
import express from 'express'
const app = express()
app.use(express.json())

createTable()

app.get('/', (req, res) =>{
    res.send("teste")
})

app.post('/pessoa', (req,res) =>{
    insertPessoa(req.body)
    res.json({
        "statuscCode": 200
    })
})


app.listen(3000,() => console.log("Api Rodando"))