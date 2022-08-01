import express from 'express';
import {createContainer, asClass, InjectionMode} from 'awilix';
import multer from 'multer';
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
let verify = container.resolve('VerifyController');


const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter:verify.fileFilter,
  limits: { fileSize: 10000000, files: 1},
});

app.get('/', (req, res) => {
  res.send("Hello");
});

app.post('/upload', upload.array("file"), (req, res) => {
  console.log("from uploads");
  console.log(req.files);
  res.send("Hello");
});

export default app;