import { Router } from 'express'
import {createUser, createPost} from '../controllers/appcontroller'

export const router = Router()

router.post('/crateUser', createUser)