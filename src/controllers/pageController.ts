//arquivo criado para gerenciar rotas do sistemas
//sempre importa o express
//export na const home serve para que seja possivel importala fora do arquivo
import {Request, Response} from 'express'
import {Pet} from '../models/pet'

 export const home =(req:Request , res:Response)=>{
     let list = Pet.getAll()
     res.render('pages/page', {
         menu:{//logica para ativar o menu dinamincamente com o mustache
             all:true,
             dog:false,
             cat:false,
             fish:false

         },
         banner:{
             title:'Todos os animais',
             background:'allanimals.jpg'
         },
         list:list
     })

//esse comando esta renderizando e jogando a home para minha rota     

}

export const dogs=(req:Request, res:Response)=>{
    let list = Pet.getFromType('dog')

    res.render('pages/page', {
        menu:{//logica para ativar o menu dinamincamente com o mustache
            all:false,
            dog:true,
            cat:false,
            fish:false

        },
        banner:{
            title:'Cachorros',
            background:'banner_dog.jpg'
        },
        list:list
    })

}
export const cats=(req:Request, res:Response)=>{
    let list = Pet.getFromType('cat')
//banner:{} é objeto que esta sendo renderizado para exibir dados dinamicos na tela
    res.render('pages/page', {
        menu:{//logica para ativar o menu dinamincamente com o mustache
            all:false,
            dog:false,
            cat:true,
            fish:false

        },
        banner:{
            title:'Gatos',
            background:'banner_cat.jpg'
        },
        list:list
    })

}

export const fishes=(req:Request, res:Response)=>{
    let list = Pet.getFromType('fish')//função criada no model só sendo utilizada no controller

    //a pagina que esta sendo chamada e a mesma oque esta mudando 
    //é oque esta renderizado na rota
    res.render('pages/page', {
        menu:{//logica para ativar o menu dinamincamente com o mustache
            all:false,
            dog:false,
            cat:false,
            fish:true

        },
        banner:{
            title:'Peixes',
            background:'banner_fish.jpg'
        },
        list:list
    })


}


