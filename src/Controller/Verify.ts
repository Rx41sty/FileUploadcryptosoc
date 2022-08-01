import { FileFilterCallback } from 'multer';
import BaseController from './Base.js';

export default class VerifyController extends BaseController{
    public fileFilter = (request: Express.Request, file: Express.Multer.File,callback: FileFilterCallback) => {
        console.log("from filters");
        console.log(file);
        if (file.mimetype === 'image/png' ||
            file.mimetype === 'image/jpg' ||
            file.mimetype === 'image/jpeg') {
            callback(null, true);
        } else {
            callback(null, false);
        }
      }
}