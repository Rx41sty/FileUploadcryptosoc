import express from 'express';
import {createContainer, asClass, InjectionMode} from 'awilix';
import multer, { FileFilterCallback } from 'multer';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const container = createContainer({
  
});

container.register({

});


function fileFilter(
  request: Express.Request,
  file: Express.Multer.File,
  callback: FileFilterCallback
) {
  console.log("from filters");
  console.log(file);
  if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
  ) {
      callback(null, true);
  } else {
      callback(null, false);
  }
}

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter,
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