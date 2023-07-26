import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'medleware/public'),
    filename: ( request, file, cb) =>{
        cb(null, new Date().getTime + path.extname (file.originalname))
    }

})

export const uploads = multer({ storage: storage }).single('photourl')

