const express = require('express');
const bodyparser = require('body-parser');
const port = 3005
const {seed} = require('../db');
const fs = require('fs');
app = express();
app.use(bodyparser.json());
app.use(express.static('client/dist'));

app.listen(port, ()=>{
    console.log(`proxy server listening on port ${port}`)
});

app.get('/api/dbOnConnect', (req, res)=>{
    // i want to be able to ping the server and reload the db
    //seed()
    //maybe eventually I can also make a seperate request to delete the databaseSeed.txt file and another 
    //to send it over. probably all doable with the deployment tools we'll learn soon but might be a good
    //exercise either way
    res.send('seed has run');
})