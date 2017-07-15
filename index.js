const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');


mongoose.Promise = global.Promise;

mongoose.connect(config.uri,(err) =>{
    if(err){
        console.log('could not be connected with database');
    }else{

        
        console.log('connected with database ' + config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/'));

app.get('*', (req, res) => {
//res.send('hello world');  
res.sendfile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(9090, ()=>{
    console.log("lestening on port 9090");
});
