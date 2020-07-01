const http = require('http');
const express = require("express");
const bodyParser= require('body-parser')
const path = require("path");
const app = express();
const port = process.env.PORT || "8000";
const MongoClient = require('mongodb').MongoClient;

const connectionString =  "mongodb+srv://ayushi:ayushi1234@cluster0-jvytf.mongodb.net/ayushi?retryWrites=true&w=majority"
const client = new MongoClient(connectionString, { useNewUrlParser: true });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});

client.connect(err => {
  // perform actions on the collection object
  if(!err) console.log("db connected");
  const db = client.db('habit-app');
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
