const express = require('express');
const router = express.Router();
const userModel = require('../userDB/userSchema');

router.get('/',function(req,res){
    userModel.find().then(function(data){
        res.send(data);
    })
});


module.exports = router;