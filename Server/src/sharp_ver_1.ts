import express from 'express';
import sharpLogger from '../utilities/sharpLogger';
import {promises as fsPromises} from 'fs';
import sharp from 'sharp';
import path from 'path';

const app = express();
const port = 3000;

const resize = async (inFile: string, outFile: string, reqWidth: number, reqHeight: number): Promise<string> => {
      try{
        let newImg = await sharp(path.join(__dirname, inFile))
        .resize(reqWidth, reqHeight)
        .toFile(path.join(__dirname, outFile)/*, function(err) {
          console.log(err);
        }*/);
        return(outFile);
      }
      catch(error){
        return(error as string);
      }
}

app.get('/convert', sharpLogger, (req, res, next) => {
  let fileName = req.query.filename;
  let width = Number(req.query.width);
  let height = Number(req.query.height);
  let inputFile = fileName+'.jpg';
  let outputFile = `${fileName}_${width}_${height}.jpg`;
  let options = {
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
      }
  resize(inputFile, outputFile, width, height).then((result: string) =>{
    console.log('resizing complete!');
    console.log(result);
    let imgPath = path.join(__dirname, result);
    res.sendFile(imgPath /*, function (err) {
        if (err) {
          next(err);
        } else {
          console.log('Sent:', result);
        }
      }*/)
  }).catch(()=>{
    console.log('there was an error resizing');
  });
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
