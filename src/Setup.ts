import express from 'express';
import {createContainer, asClass, InjectionMode} from 'awilix';

import VerifyController from './Controller/Verify.js';
import UploadController from './Controller/Upload.js';
import S3Service from './Service/S3.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const container = createContainer({
  injectionMode: InjectionMode.CLASSIC
});

container.register({
  S3Service: asClass(S3Service),
  UploadController: asClass(UploadController),
  VerifyController: asClass(VerifyController)
});

let upload = container.resolve('UploadController');
let verify = container.resolve('VerifyController');

app.post('/upload', verify.getMulter().single("file"), (req, res) => {
  upload.uploadImages(req, res);
});

export default app;