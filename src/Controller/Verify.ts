import multer, { FileFilterCallback } from 'multer';
import BaseController from './Base.js';

export default class VerifyController extends BaseController{
    private storage:multer.StorageEngine;
    private multer:multer.Multer;
    constructor(){
        super();
        this.storage = multer.memoryStorage();
        this.multer = multer({
            storage:this.storage,
            fileFilter:this.fileFilter,
            limits: { fileSize: 10000000, files: 1},
          });
    }
    public fileFilter = (request: Express.Request, file: Express.Multer.File, callback: FileFilterCallback) => {
        if (file.mimetype === 'image/png' ||
            file.mimetype === 'image/jpg' ||
            file.mimetype === 'image/jpeg') {
            callback(null, true);
        } else {
            callback(null, false);
        }
    }

    public getMulter():multer.Multer{
        return this.multer;
    }
    public getStorage():multer.StorageEngine{
        return this.storage;
    }
}