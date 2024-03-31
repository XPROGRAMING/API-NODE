const express = require('express')
const app = express()
app.use(express.json())


app.get('/', (req, res) =>{
    res.send("teste")
})

app.post('/pessoa', (req,res) =>{
    console.log(req.body)
    res.json({
        "statuscCode": 200
    })
})


app.listen(3000,() => console.log("Api Rodando"))