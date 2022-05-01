import express from 'express';
import sharpLogger from '../utilities/sharpLogger';
import {promises, accessSync, access, stat, constants} from 'fs';
import sharp from 'sharp';
import path from 'path';

const app = express();
const port = 3000;

const resize = async (inFileName: string, outFileName: string, reqWidth: number, reqHeight: number) => {
  let cwd = path.join(__dirname);
  let inputPath = path.join(cwd, '..', 'images', inFileName);
  let outputPath = path.join(cwd, '..', 'thumbnails', outFileName);
  await sharp(inputPath)
    .resize(reqWidth, reqHeight)
    .toFile(outputPath);
    console.log('resizing finished!');
}
app.get('/convert', sharpLogger, async (req, res, next) => {
  let cwd = path.join(__dirname);
  const makeDir = async () => {
      await promises.mkdir(`thumbnails`, {recursive: true});
  }
  // Check if directory exists in the parent directory.
  access(path.join(cwd, '..', 'thumbnails'), constants.F_OK, (err) => {
    console.log(`${path.join(cwd, '..', 'thumbnails')} directory ${err ? 'does not exist' : 'exists'}`);
    if (err){
      makeDir();
    }
  });
  let fileName = req.query.filename;
  let width = Number(req.query.width);
  let height = Number(req.query.height);
  let inputFile = fileName + '.jpg';
  let outputFile = `${fileName}_${width}_${height}.jpg`;
  // Check if the requested file and dimensions exist.
  try {
    accessSync(path.join(cwd, '..', 'thumbnails', outputFile), constants.R_OK);
    console.log('requested file and dimensions exist');
    res.sendFile(path.join(cwd, '..', 'thumbnails', outputFile));
  } catch (err) {
    console.error('requested file and dimensions processing...');
    await resize(inputFile, outputFile, width, height);
    res.sendFile(path.join(cwd, '..', 'thumbnails', outputFile));
  }
});
// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
