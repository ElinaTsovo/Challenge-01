import {users} from '../model/modellUser'
import {post} from '../model/modellPost'
import {coment} from '../model/modellComent'
import { Request, Response, request } from 'express'
import { Error } from 'mongoose'


export const createUser = async (request:Request, response:Response) =>{
     const { nameUser,emailUser,contactUser,passwordUser, confirmPassword}= request.body
     try {
        const createUserF = await users.create({
            nameUser,
            emailUser,
            passwordUser
        })
         return response.json('usuário criado com sucesso')
     } catch (error) {
        console.log(error)
        return response.json('usuário não criado, tente novamente')
        
     }
}

export const getUser = async (request:Request, response:Response) =>{
    const { nameUser,emailUser,contactUser,passwordUser, confirmPassword}= request.body
    try {
       const getUserF = await users.find()
        return response.json(getUserF)
    } catch (error) {
       console.log(error)
       return response.json('usuário não encontrado, tente novamente!')
       
    }
}


const editProfile = async (request:Request, response:Response) =>{
        const{_id} = request.params
        const {nameUser,emailUser,contactUser,cityUser,borndayUser,photoprofileUser} = request.body
}

export const createPost = async(request:Request, response:Response) =>{
            const { postTitle, postPhoto, publishPost} = request.body
            try {
                const createPostF = await post.create({
                    postTitle,
                    postPhoto,
                    publishPost


                })
                
                return response.json('foto publicada com SUCESSO!')

            } catch (error) {
                return response.json('ERROR, foto não publicada, tente novamente!')
                
            }
}
    
export const addComent = async (request:Request, response:Response) =>{
        const {author, comentt, publishComent} = request.body
        try {
            const addComentF = await coment.findOne({name})
            if(!author){
                return response.json('User not found!')
            }

            await coment.create({
                name,
                comentt,
                publishComent
            })

            return response.json({message: 'Comentário publicado com SUCESSO!'})

        } catch (error) {
            return response.json({message: 'ERRO, comentário não publicado, tente novamente!'})
            
        }


}