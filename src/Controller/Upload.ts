import {Request, Response} from 'express';
import { nanoid } from 'nanoid';

import BaseController from './Base.js';
import S3Service from '../Service/S3.js';
import { CustomError, ErrorNM } from '../Error.js';

export default class UploadController extends BaseController{
    private s3:S3Service;
    constructor(S3Service:S3Service){
        super();
        this.s3 = S3Service;
    }

    public async uploadImages(req:Request, res:Response){
        if(req.file === undefined){
            this.handleException(res, new CustomError(ErrorNM.FileNotUploaded));
            return;
        }
        try{
            let newName = this.generateName(req.file.originalname);
            await this.s3.uploadImage(newName, req.file.buffer);
            this.handleResponse(res);
        }catch(err:any){
            this.handleException(res, err)
        }
    }

    private generateName(currentName:string):string{
        return nanoid() + currentName;
    }
}