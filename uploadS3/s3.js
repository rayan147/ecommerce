
import dotenv from 'dotenv';
import AWS from 'aws-sdk';
import fs from 'fs';

dotenv.config();








const { S3} =  AWS

const bucketName = process.env.AWS_BUCKET_IMAGES_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new S3({
    accessKeyId,
    secretAccessKey,
    region,
    params: {
        Bucket: bucketName
    }

});

// create a function that will upload a file to S3
export const uploadFile = (file) => {
    const fileStream = fs.createReadStream(file.path);
    const { filename } = file;
    const uploadParams = {
         Bucket: bucketName,
         Body: fileStream,
         Key: filename,
    };
    return s3.upload(uploadParams).promise();
}

// create a function that will download a file from S3
export const getFileStream = (fileKey) => {
    
    const downloadParams = {
        Bucket: bucketName,
        Key: fileKey,
      
    };
    return s3.getObject(downloadParams).createReadStream();
}