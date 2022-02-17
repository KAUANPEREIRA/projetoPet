//dentro da pasta src criar .env para as portas do projeto
//dentro da pasta src criar uma pasta views para a vizualização do mustache
//na pasta public tem o css imagens e detalhes do projeto
import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import mainRoutes from './routes/index'

dotenv.config()

const server = express()
server.set('view engine','mustache')//para utilizar mustache
server.set('views' , path.join(__dirname, 'views'))//para visualizar as pastas do projeto
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))

//rotas
server.use(mainRoutes)

//rota de erro

server.use((req, res)=>{
    res.render('pages/404')
})



server.listen(process.env.PORT)