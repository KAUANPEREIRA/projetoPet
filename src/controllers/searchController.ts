import {Request, Response} from 'express'
import {Pet} from '../models/pet'

 export const search =(req:Request , res:Response)=>{
     //codigo para pegar oque usuario digitou através da url

     let query = req.query.q as string
     let list = Pet.getFromName(query)
     res.render('pages/page',{
        menu:{
            all:false,
            dog:false,
            cat:false,
            fish:false,

        },
        list:list        
     })

}
