const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');

const DB_connect = require('./Configs/DatabaseConfig')

const app = express();
dotenv.config();
app.use(bodyParser.json());



app.get('/hello', (req, res) => {
    console.log("hi all fine bro");
    res.send("nice ji");
});

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});
const URL = process.env.MONGO_URL;
console.log("hi",URL)

//url ko argument mein pass kiya
DB_connect(URL);  // db ko call kiye taki db connect function run ho