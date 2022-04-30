import express from 'express';
import {promises as fsPromises} from 'fs';
import csv from 'csvtojson';

const app = express();
const port = 3000;

const inputFile = `${__dirname}/users.csv`;
const outputFile = `${__dirname}/users.json`;

app.get('/convert', (req, res)=>{
    res.send('converting in process!');
    csv()
    .fromFile(inputFile)
    .then((data: any)=>{
      let newData = data.map( (item: {first_name: string; last_name: string;
      phone: string; }) => {
        let first = item.first_name;
        let last = item.last_name;
        let phone = item.phone;
        if(item.phone === ""){
          phone = "missing data";
        }
        return {first, last, phone};
      });
      console.log(newData);
      fsPromises.writeFile(outputFile, JSON.stringify(newData));
    });
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
