import express from 'express';
import multer from 'multer';
import dotenv from 'dotenv';
import fs from 'fs';
import util from 'util';
import {uploadFile,getFileStream} from './s3.js'

dotenv.config();

// unlink upload folder
const unlink = util.promisify(fs.unlink);

const app = express();
const upload = multer({ dest: 'uploads/' });

app.get('/images/:key',(req,res)=>{
  const key = req.params.key;
  const readStream = getFileStream(key);
    readStream.pipe(res);
})

app.post('/image', upload.single('image'),async (req, res) => {
    try {
        const file = req.file;
        console.log({file});
        const result = await uploadFile(file);
        await unlink(file.path);
        console.log({result});
        res.send({
        success: true,
        imagePath:`images/${result.Key}`
   }) 
    } catch (error) {
        res.status(500).send(error);
    }
        
    }
  
);

app.listen(process.env.PORT_S3, () => {
    console.log('Listening on port 5001');

})