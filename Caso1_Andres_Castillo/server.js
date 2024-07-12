const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const PUBLIC =path.join(__dirname, 'public');



app.use(express.urlencoded({extended : true}));
app.use(express.static(PUBLIC));


app.get('/',(req,res)=>{
    console.log('Loading home...');
    res.sendFile(path.join(PUBLIC, 'home.html'));
});






