import BaseController from './Base.js';
import S3Service from '../Service/S3.js';
export default class UploadController extends BaseController{
    private s3:S3Service;
    constructor(S3SC:S3Service){
        super();
        this.s3 = S3SC;
    }

    public upload(){
        
    }
}