const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());


// Connecting to front-end
app.use(express.static('./client'))

const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

let newsKey = 3;

const newsData = [
  {
    type: 'flyer',
    key: '2',
    date: '22. FEBRUARY 2019',
    linkUrl: 'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/51814874_783791751995120_2480949100749520896_o.jpg?_nc_cat=109&_nc_sid=b386c4&_nc_ohc=fTBtA4m2njgAX8a2gv6&_nc_ht=scontent-frt3-2.xx&oh=6aee565531374730de5020512d4f3c6f&oe=5F0551DC',
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

// create a GET route
app.get('/allNews', (req, res) => {
  res.send(newsData);
});

app.post('/addNews', (req, res) => {
  req.body.key= newsKey;
  newsKey++;
  newsData.push(req.body);
});