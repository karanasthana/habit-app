const http = require('http');
const express = require("express");
const bodyParser= require('body-parser')
const path = require("path");
const app = express();
const port = process.env.PORT || "8000";
const MongoClient = require('mongodb').MongoClient;
const Constants = require('./utilities/constants');
const connectionString = Constants.DB.CONNECTION_STRING;
const client = new MongoClient(connectionString, { useNewUrlParser: true });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});

client.connect(err => {
  // perform actions on the collection object
  if(!err) console.log("db connected");
  const db = client.db(Constants.DB.NAME);
  const usersCollection = db.collection('users')

  app.post('/user', (req, res) => {
    let params = req.body || {};
    console.log("request", req.body)
    usersCollection.insertOne(params)
      .then(response => {
        res.status(200).send(req.body)
      })
      .catch(error => console.error(error))
  })
});
