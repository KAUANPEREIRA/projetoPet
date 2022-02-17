//ROUTER PARA AS ROTAS
//req res REQUEST RESPONSE O RESPONSE SE TRATA DA RESPOSTA DA REQUISIÇÃO

import {Router} from 'express'
//este tipo de import abaixo serve para importar todas rotas criadas no arquivo pageController
import * as pageController from '../controllers/pageController'
import * as searchController from '../controllers/searchController'
//criando rotas através do mvc de maneira organizada
const router = Router()

router.get('/',pageController.home)//rota para home criada no pageController

router.get('/dogs',pageController.dogs)
router.get('/cats',pageController.cats)
router.get('/fishes',pageController.fishes)
router.get('/search',searchController.search)

export default router