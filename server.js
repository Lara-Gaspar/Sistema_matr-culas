console.log("arquivo iniciou")

const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const cursos = [
 {id:1, nome:"Desenvolvimento Web"},
 {id:2, nome:"Python"},
 {id:3, nome:"Banco de Dados"}
]

app.get("/cursos", (req,res)=>{

 res.json(cursos)

})

app.post("/matricula", (req,res)=>{

 const {nome,email,curso} = req.body

 if(!nome || !email || !curso){

  return res.status(400).json({
   mensagem:"Dados inválidos"
  })

 }

 res.status(201).json({
  mensagem:"Matricula realizada com sucesso"
 })

})

app.listen(3000, ()=>{

 console.log("Servidor rodando na porta 3000")

})