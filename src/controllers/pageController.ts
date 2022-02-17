//arquivo criado para gerenciar rotas do sistemas
//sempre importa o express
//export na const home serve para que seja possivel importala fora do arquivo
import {Request, Response} from 'express'

 export const home =(req:Request , res:Response)=>{
     res.send('home no controler')

}

export const dogs=(req:Request, res:Response)=>{

}
export const cats=(req:Request, res:Response)=>{

}

export const fishes=(req:Request, res:Response)=>{

}


