const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/UserDB';

const app = express();

mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection;

con.on('open', function(){
    console.log('connected to the database');
})
app.use(express.json())
const userRouter = require('./routes/users')
app.use('/users',userRouter);

app.listen(9000, () =>{
    console.log('Server started')
})