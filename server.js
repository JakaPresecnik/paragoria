const express = require('express');
const path = require('path');
const app = express();

const cors = require('cors');
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

// Connecting to front-end
app.use(express.static(path.join(__dirname, 'client/build')))

const port = process.env.PORT || 5001;

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

// nove poti za pgdb
//------------------------------------------------------------------------------------------------------------------------
app.get('/api/v1/news', async (req,res) => {
  try {
    const results = await db.query('SELECT * FROM news');
    res.send({
      status: 'sucess',
      newsData: results.rows,
      results: results.rows.length
    })

  }catch (err) {
    console.log(err);
  }
  

});

app.post('/api/v1/news', async (req,res) => {
  try {
    const results = await db.query(`INSERT INTO news(date, type, content, description) values ($1, $2, $3, $4) RETURNING *`, [req.body.date, req.body.type, req.body.content, req.body.description]);

    res.send(results);

  }catch(err) {
    console.log(err);
  }
})

//---------------------------------------------------------------------------------------------------------------------

// create a GET route

app.get('/*', (req, res) =>{
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
