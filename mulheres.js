const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome:'Simara Conseição',
        imagem:'https://tse4.mm.bing.net/th?id=OIP.qeffvHdSUkQYLj5YDjZRfwHaJl&pid=Api&P=0&h=180',
        minibio:'Desenvolvedora e Instrutora de Desenvolvimento'
    },
    {
        nome: 'Lana Santos Lima',
        imagem:'https://www.linkedin.com/in/lana-santos-lima-47816124b?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD3H61wBan8AuN5b0Kb0IKbM8zPeW_bwS9U&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BQr3GQjt9TbWF7YrKr%2Bs6gA%3D%3D',
        minibio: 'Jovem Aprendiz na Vivo, Artitas por Amor'
    },
    {
        nome:'Mariana Nascimento dos Santos',
        imagem:'https://www.linkedin.com/in/mariananascimentosantos?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAmC97ABREptGPJHgKJiofeOL12XxS2VFlU&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BKnQ7J%2BiTQVKvFRZveJtCHQ%3D%3D',
        minibio:'Analista de implanação que Amo jogos'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta () {
    console.log("Servidor criado e rodando na porta ", porta)    
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)
