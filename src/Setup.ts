import express from 'express';
import {createContainer, asClass, InjectionMode} from 'awilix';
import multer from 'multer';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const container = createContainer({
  
});

container.register({

});


function fileFilter (req, file, cb) {
  console.log("inside filter");
console.log(file);

  // // To reject this file pass `false`, like so:
  // cb(null, false)

  // // To accept the file pass `true`, like so:
  // cb(null, true)

  // // You can always pass an error if something goes wrong:
  // cb(new Error('I don\'t have a clue!'))

}

const storage = multer.memoryStorage()
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1000000000, files: 1},
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