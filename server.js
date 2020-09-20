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
app.get('/api/v1/tabs', async (req,res) => {
  try {
    const tabs = await db.query('SELECT * FROM tabs')

    res.send(tabs.rows[0])
  } catch (error) {
    console.log(error)
  }
})

app.put('/api/v1/tabs', async (req,res) => {
  try {
    const tab = await db.query('UPDATE tabs SET show = $1', [req.body.tabs])
    
    res.send(tab)
  } catch (error) {
    console.log(error);
  }
})

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
});

app.post('/api/v1/merch', async (req, res) => {
  try {
    const added = await db.query(`INSERT INTO merch (type, item, picture, picture_back, cost, xs_stock, s_stock, m_stock, l_stock, xl_stock, xxl_stock) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) 
      RETURNING *`, 
    [req.body.type, req.body.item, req.body.picture, req.body.picture_back, req.body.cost, req.body.xs_stock, req.body.s_stock, req.body.m_stock, req.body.l_stock, req.body.xl_stock, req.body.xxl_stock])
    const result = await db.query('SELECT * FROM merch');

    res.send(result.rows)
  } catch (error) {
    console.log(error)
  }
})

app.delete('/api/v1/merch', async (req, res) => {
  try {
    const removed = await db.query('DELETE FROM merch WHERE key = $1', [req.body.key]);
    const result = await db.query('SELECT * FROM merch')

    res.send(result.rows);
  } catch (error) {
    console.log(error);
  }
})

app.put('/api/v1/merch', async (req, res) => {
  try {
    console.log(req.body)
    const update = await db.query(`
    UPDATE merch 
      SET item = $2,
        picture = $3,
        picture_back = $4,
        cost = $5,
        xs_stock = $6,
        s_stock = $7,
        m_stock = $8,
        l_stock= $9,
        xl_stock = $10,
        xxl_stock = $11
      WHERE key = $1`, 
      [req.body.key, req.body.item, req.body.picture, req.body.picture_back, req.body.cost, req.body.xs_stock, req.body.s_stock, req.body.m_stock, req.body.l_stock, req.body.xl_stock, req.body.xxl_stock])
    
    res.send(res.rows)
  } catch (error) {
    console.log(error);
  }
})

app.post('/api/v1/news', async (req,res) => {
  try {
    const results = await db.query(`
    INSERT INTO news(date, type, header, content, description) 
      VALUES ($1, $2, $3, $4, $5) 
      RETURNING *`, 
    [req.body.date, req.body.type, req.body.header, req.body.content, req.body.description]);

    res.send(results);

  }catch(err) {
    console.log(err);
  }
})

app.post('/api/v1/concert', async (req,res) => {

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
