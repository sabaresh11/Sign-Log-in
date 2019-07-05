const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;
const login = require('./routes/login');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var db = mongoose.connection;
db.on('error' ,console.error.bind(console,'Connection Error:'));
db.once('open',function(){
    console.log('Connected to DB');
})    


app.use(express.json());
app.use('/',login);


app.listen(PORT,() => console.log(`Server Listening to PORT: ${PORT}`));