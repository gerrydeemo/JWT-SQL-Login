let express = require("express");
let bodyParser = require('body-parser');
let jwt = require("jsonwebtoken")
let dotenv = require("dotenv")


let cors = require("cors");
const { default: axios } = require( "axios" );
let app = express();
let mysql = require("mysql")

app.use(cors({origin: "*"}));
app.use(bodyParser.json());

dotenv.config()




const db = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: 'Gerry2482',
    database: 'reactisking'
});

db.connect((err) => {
    if (err){
       throw err
    }
   console.log("mysql connected...")
})


// app.get("/createdb", (req,res) => {
//    let sql = 'CREATE DATABASE reactisking';
//    db.query(sql, (err, result) => {
//        if (err) throw err
//        console.log(result)
//        res.send('database created')
//    })
// })
//
// app.get('/createtable', (req, res) => {
//     let sql = 'CREATE TABLE users (id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))';
//     db.query(sql, (err, result) => {
//         if (err) throw err
//         console.log(result)
//         res.end("post table created...")
//     } )
//
// })

app.get("/register", (req, res) => {
    let post = {email:req.body.email, password: req.body.password};
    let sql = 'INSERT INTO users SET ?';
    let query = db.query(sql, post, (err, result) => {
       if(err) throw err
       console.log(result)
       res.send("registered")
    })
})

function generateAccessToken(email, password) {
    return jwt.sign({email:email, password:password}, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

app.post("/logins", (req, res) => {
    const email = req.body.email
    const password = req.body.password
    console.log(email + " " + password)

    const token = generateAccessToken({email:email, password:password});

    if (email && password) {

        db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function(err, results) {
            if (err) throw err;
            if (results.length > 0) {
                res.json(token);
            } else {
                res.send('Incorrect Username and/or Password!');
            }

        });
    } else {
        res.send('Please enter Username and Password!');

    }
})











app.listen(5000, () => {
    console.log("listeniing on port 5000");
})
