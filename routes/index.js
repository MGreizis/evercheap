import express from 'express';
import fs from 'fs';
const router = express.Router();

// setting up the right path to the json folder.
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// 👇️ find the path to the data folder containing de json
const reqpath = path.join(__dirname, '..', 'data');

// routes
router.get('/', (req, res, next) => {
  res.json('hi');
});

// better not to use listStore just use /stores
router.get('/stores', function (req, res) {
  console.log(`..${__dirname}`);
  fs.readFile(`${reqpath}/stores.json`, 'utf8', function (err, data) {
    console.log(data);
    res.end(data);
  });
});

export default router;
