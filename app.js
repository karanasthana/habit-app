const http = require('http');
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || "8000";
const {MongoClient} = require('mongodb');

app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });

  async function main(){
    const uri = "mongodb+srv://ayushi:ayushi1234@cluster0-jvytf.mongodb.net/ayushi?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
  }
  main().catch(console.error);