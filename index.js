const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

MongoClient.connect(url , { useNewUrlParser: true , useUnifiedTopology: true}, function(err, db) {
    if (err) throw err;
    console.log("Connected to MongoDB!");
    
    
    db.close();
  })