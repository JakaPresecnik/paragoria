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
// login poti, dashboard
//---------------------------------------------------------------
app.use('/auth', require('./routes/auth'));
app.use('/dashboard', require('./routes/dashboard'));
//--------------------------------------------------------------

// nove poti za pgdb
//------------------------------------------------------------------------------------------------------------------------
app.get('/api/v1/news', async (req,res) => {
  
  try {

    const news = await db.query('SELECT * FROM news');
    
    const upcomingConcerts = await db.query('SELECT * FROM concerts WHERE datetime >= NOW() ORDER BY datetime');
    const previousConcerts = await db.query('SELECT * FROM concerts WHERE datetime < NOW() ORDER BY datetime DESC LIMIT 6');
 
    res.send({
      status: 'sucess',
      newsData: news.rows.reverse(),
      newsLength: news.rows.length,
      previousConcertsData: previousConcerts.rows,
      previousConcertsLength: previousConcerts.rows.length,
      upcomingConcertsData: upcomingConcerts.rows,
      upcomingConcertsLength: upcomingConcerts.rows.length
    })

  }catch (err) {
    console.log(err);
  }
  

});
app.get('/api/v1/merch', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM merch');
    res.send({
      status: 'success',
      merchData: result.rows,
      results: result.length
    })
  } catch (err) {
    console.log(err);
  }
})

app.post('/api/v1/news', async (req,res) => {
  try {
    const results = await db.query(`INSERT INTO news(date, type, header, content, description) values ($1, $2, $3, $4, $5) RETURNING *`, [req.body.date, req.body.type, req.body.header, req.body.content, req.body.description]);

    res.send(results);

  }catch(err) {
    console.log(err);
  }
})

app.post('/api/v1/concert', async (req,res) => {
  console.log(req.body)
  try {
    const results = await db.query(`INSERT INTO concerts (datetime, location, description) VALUES ($1, $2, $3)`, [req.body.datetime, req.body.location, req.body.description]);

    res.send(results);
    }catch(err) {
     console.log(err)
    }
})

//---------------------------------------------------------------------------------------------------------------------

// create a GET route

app.get('/*', (req, res) =>{
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
