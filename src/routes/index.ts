//ROUTER PARA AS ROTAS
//req res REQUEST RESPONSE O RESPONSE SE TRATA DA RESPOSTA DA REQUISIÇÃO

import {Router} from 'express'
//este tipo de import abaixo serve para importar todas rotas criadas no arquivo pageController
import * as pageController from '../controllers/pageController'
import * as searchController from '../controllers/searchController'
//criando rotas através do mvc de maneira organizada
const router = Router()

router.get('/',pageController.home)//rota para home criada no pageController

router.get('/dogs',pageController.dogs)//rotaa criada para pagina de cachorros

router.get('/cats',pageController.cats)//rota criada para pagina de gatos

router.get('/fishes',pageController.fishes)//rota criada oara pagina de peixes

router.get('/search',searchController.search)//rota criada para input de busca

export default router