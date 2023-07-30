import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import path  from 'path'
import multer from 'multer'

import {router} from './routes/router'
import {uploads} from './medleware/upload'
import {connectionDB} from './bdConnection/appBD' 

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'medleware')))
app.use( '/api',router)

connectionDB()


const port = process.env.PORT || 5000

app.listen(port, () =>{
    console.log(`The server is running on http://localhost:${port}`)
})