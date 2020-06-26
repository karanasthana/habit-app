const http = require('http');
const express = require("express");
const bodyParser= require('body-parser')
const path = require("path");
const app = express();
const port = process.env.PORT || "8000";
const MongoClient = require('mongodb').MongoClient;

const connectionString =  "mongodb+srv://ayushi:ayushi1234@cluster0-jvytf.mongodb.net/ayushi?retryWrites=true&w=majority"
const client = new MongoClient(connectionString, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});

client.connect(err => {
    const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("db connected")
  client.close();
})