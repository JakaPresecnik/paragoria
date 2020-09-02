const router = require('express').Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');

const authorization = require('../middleware/authorization');

// registering

router.post('/register', async(req,res) => {
    try {
        
        //desctructure req.body(name,email,password)
        
        const { email, password } = req.body;
    
        //check if user exists

        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]);

        if (user.rows.length !== 0) {
            return res.status(401).send("User already exists!")
        } 

        //bcrypt users password

        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);

        const bcryptPassword = await bcrypt.hash(password, salt);

        // enter the user inside our database

        const newUser = await pool.query(
            'INSERT INTO users(user_email, user_password) VALUES ($1, $2) RETURNING *', 
            [email, bcryptPassword]);

        // generating jwt token

        const token = jwtGenerator(newUser.rows[0].user_id);

        res.json({ token })

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})

// login

router.post ('/login', async (req, res) => {
    try {
        
        // destructure req.body

        const { email, password } = req.body;

        // check if user doesn't exist throw error

        const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [email]);

        if (user.rows.length === 0) {
            return res.status(401).send('Password or email incorrect!')
        }

        // check if incomming password is the same as database password

        const validPassword = await bcrypt.compare(password, user.rows[0].user_password);

        if (!validPassword) {
            return res.status(401).send('Password or email incorrect!')
        }

        // give them jwt token

        const token = jwtGenerator(user.rows[0].user_id);

        res.json({ token })

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})

router.get('/is-verify', authorization, async (req, res) => {
    try {
        res.json(true);
    } catch (error) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})


module.exports = router;