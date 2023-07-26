import {user} from '../model/modellUser'
import {post} from '../model/modellPost'
import {coment} from '../model/modellComent'
import { Request, Response } from 'express'


export const createUser = async (request:Request, response:Response) =>{
     const { nameUser,emailUser,contactUser,passwordUser, confirmPassword}= request.body
     try {
        const createUserF = await user.create({
            nameUser,
            emailUser,
            passwordUser
        })
         return response.json('usuário criado com sucesso')
     } catch (error) {
        return response.json('usuário não criado, tente novamente')
        
     }
}



export const createPost = async(request:Request, response:Response) =>{
            const { postoTitle, postPhoto, postLegenda} = request.body
            try {
                const createPostF = await post.create({
                    postoTitle,
                    postPhoto,
                    postLegenda

                })
            } catch (error) {
                
            }
}
    
export const addComent = async (request:Request, response:Response) =>{
        const {name, comentt} = request.body
        try {
            const addComentF = await coment.findOne({name})
            if(!name){
                return response.json('User not found')
            }

        } catch (error) {
            
        }


}