const express = require('express');
const bodyparser = require('body-parser');
const port = 3005
const {seed, model} = require('../db');
const fs = require('fs');
require('dotenv').config();
app = express();
app.use(bodyparser.json());
app.use(express.static('client/dist'));
app.listen(port, ()=>{
    console.log(`proxy server listening on port ${port}`)
});

app.get('/api/dbOnConnect', (req, res)=>{
    // i want to be able to ping the server and reload the db
    // seed()
    //maybe eventually I can also make a seperate request to delete the databaseSeed.txt file and another 
    //to send it over. probably all doable with the deployment tools we'll learn soon but might be a good
    //exercise either way
    res.send('seed has run');
})

app.post('/api', (req, res)=>{
    if(req.body.type === "form input"){
        if(req.body.query!==""){
            model.find({name: {$regex: '.*' + req.body.query + '.*' }})
                .limit(7)
                .sort({name:1})
                .then((docs)=>{
                        res.header(301);
                        res.send(docs);
                    }
                )
        }else{
            res.header(300);
            res.end();
        }
    }else if(req.body.type === "data retrieve"){
        model.find({uuid : req.body.query})
        .then((doc)=>{
            res.header(301);
            res.send(doc);
        })
    }
})