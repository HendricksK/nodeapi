const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
var db               = require('./config/db');
const app            = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));


//DB connection here
MongoClient.connect(db.url, (err, database) => {
    
    if (err) return console.log(err) //if error occurs, log said error
    
    db = database.db('notes-app') //setting db name and parsing to routes below
    
    require('./app/routes')(app, db);

    app.listen(port, () => {
        console.log('We are live on ' + port);
    });            
})


//adding white space as a tutorial on git stuff
