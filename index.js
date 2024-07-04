const express = require('express');
const database = require("@replit/database")
const path = require('path');

const db = new database()
const app = express();
app.use(express.urlencoded({ extended: true })); 

app.listen(3000, () => {
  // console.log('server started');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/new.html'));
});

