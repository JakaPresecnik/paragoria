const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());


// Connecting to front-end
app.use(express.static(path.join(__dirname, 'client/build')))

const port = process.env.PORT || 5001;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

let newsKey = 3;

const newsData = [
  {
    type: 'flyer',
    key: '2',
    date: '22. FEBRUARY 2019',
    linkUrl: 'https://i.ibb.co/fXb1Cpv/flyer.jpg',
    description: 'Camel Metal Show !! Gonoba - 15. obletnica in zadnji koncert - spet! Skupaj z gosti Paragoria in Licence to Hate !!',
  },
  {
    type: 'video',
    key: '1',
    date: '25. DECEMBER 2019',
    linkUrl: 'https://www.youtube.com/watch?v=PsLf10FESl4',
    description: '6 years after Decomposition of mind we are back in studio recording our 2nd album. Album will be out in the middle of 2020.',
  },
];

// nove poti za pgdb

app.get('/api/v1/news', async (req,res) => {
  try {
    const results = await db.query('SELECT * FROM news');

  console.log(results);
  
  res.send('succes');
  }catch (err) {
    console.log(err);
  }
  

});

app.post('/api/v1/news', (req,res) => {
  console.log(req.body);
})


// create a GET route
app.get('/allNews', (req, res) => {
  res.send(newsData);
});

app.get('/*', (req, res) =>{
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.post('/addNews', (req, res) => {
  req.body.key= newsKey;
  newsKey++;
  newsData.push(req.body);
});
