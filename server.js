import app from './app';

const port = process.env.PORT || '9000'; app.listen(port); 

console.log(`Listening on port ${port}`);


//  const express        = require('express');
//  const MongoClient    = require('mongodb').MongoClient;
//  const bodyParser     = require('body-parser');
//  const mongoose = require('mongoose');

//  const db             = require('./config/db');
//  const app            = express();
//  const uri = 'mongodb+srv://luther:Engmann1@cluster0-bgew2.mongodb.net/test?retryWrites=true&w=majority';
//  const port           = 9000;
//  app.use(bodyParser.urlencoded({ extended: true }));
//  mongoose.connect('mongodb://localhost:27017/notesdb',{ useNewUrlParser: true,  useUnifiedTopology: true  })
//  .then(
//     () => { server.start(); },
//     err => { /** handle initial connection error */ }
//   ).catch(err => console.log(err.reason));

// require('./app/routes')(app, {});
// app.listen(port, () => {  console.log('We are live on ' + port);});
