import express from 'express';
import multer from 'multer';
import dotenv from 'dotenv';
import fs from 'fs';
import util from 'util';
import { uploadFile, getFileStream } from './s3.js';
import cors from 'cors'

dotenv.config();

// unlink upload folder
const unlink = util.promisify(fs.unlink);

const app = express();
app.use(cors())
const upload = multer({ dest: 'uploads/' });

app.get('/images/:key', (req, res) => {
  const { key } = req.params;
  const readStream = getFileStream(key);
  readStream.pipe(res);
});

app.post('/images', upload.single('image'), async (req, res) => {
  try {
    const { file } = req;
    console.log({ file });
    const result = await uploadFile(file);
    await unlink(file.path);
    console.log({ result });
    res.send({
      success: true,
      imagePath: `images/${result.Key}`,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(process.env.PORT_S3, () => {
  console.log('Listening on port 5001');
});
