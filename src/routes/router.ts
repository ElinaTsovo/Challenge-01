import { Router } from 'express'
import {createUser, createPost, addComent, getUser} from '../controllers/appcontroller'

export const router = Router()

router.post('/challenge/createuser', createUser)
router.get('/challenge/getuser', getUser)
router.post('/challenge/createpost', createPost)
router.post('/challenge/addcoment/name', addComent)