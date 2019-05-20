const mongoose = require('mongoose');
const fs = require('fs');
const {username, password} = require('./config.js');


mongoose.connect(`mongodb+srv://${username}:${password}@thedarkness-hrmqy.mongodb.net/test?retryWrites=true`, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
module.exports.seed = ()=>{
  // we're connected!
  console.log('test')
  const searchbarSchema = new mongoose.Schema({
    uuid : {
        type: Number,
        unique : true
    },
    name : String,
    category : String,
    BLD : String
    })
    let searchbar = mongoose.model('Restaurant', searchbarSchema)
    
    fs.readFile('databaseSeed.txt', (err, data) => {
        if (err) throw err;
        searchbar.insertMany(JSON.parse(data).map((restaurant)=>{
            return new searchbar(restaurant);
        }), (err, docs)=>{});
      });
    }

