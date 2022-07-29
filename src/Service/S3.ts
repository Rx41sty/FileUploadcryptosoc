import {S3} from 'aws-sdk';
import {CustomError, ErrorNM} from '../Error.js';
import Base from './Base.js';

export default class S3Service extends Base{
    private s3service:S3;
    constructor(){
        super();
        this.s3service = new S3();
    }

    // public async uploadImage(){
    //     const params = {
    //         Bucket: process.env.AWS_S3_IMAGES_BUCKET_ID,
    //         Key: `uploads/${uuid()}-${file.originalname}`,
    //         Body: file.buffer
    //       };

    //     try{
    //         let res = await this.s3service.upload(params).promise();
    //     } catch(error:any) {
    //         console.log("Error -> " + error);
    //     }
    // }
}