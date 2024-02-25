const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Liliane Santos Lima',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQE8ZS5t2Vh1hg/profile-displayphoto-shrink_400_400/0/1659895475862?e=1714608000&v=beta&t=2Wiwg0nUIgCAI83KkRZ3BjkcKg6GFlYsUxtKc3iEa3A',
        minibio: 'Analista de Qualidade e Mãe em tempo integral'
    })
}

function mostraPorta () {
    console.log("Servidor criado e rodando na porta ", porta)    
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
