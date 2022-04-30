import express from 'express';
import routes from './routes/index';
import logger from './utilities/logger';
import csv from 'csvtojson';
import {promises as fsPromises} from 'fs';

const app = express();
const port = 3000;

const inputFile = './users.csv';
const outputFile = 'users.json';

app.use('/api', routes);

app.get('/continents', logger, (req, res)=>{
   res.send('continents!');
});
app.get('/countries', logger, (req, res)=>{
    res.send('countries!');
});
app.get('/oceans', (req, res)=>{
    res.send('oceans!');
});

app.get('/convert', (req, res)=>{
  res.send('converting in process!');
  csv()
  .fromFile(inputFile)
  .then((data)=>{
    let newData = data.map((item:{ first_name: string; last_name: string; phone: string;}) =>{
      let first = item.first_name;
      let last = item.last_name;
      let phone = item.phone;
      if (item.phone === ""){
        phone = "missing data";
      }
      return {first, last, phone};
    });
    fsPromises.writeFile(outputFile, JSON.stringify(newData));
  });
});

app.listen(port, ()=>{
    console.log(`server is listening on port: ${port}`);
});
