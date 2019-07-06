const express = require('express');
const router = express.Router();
const userModel = require('../userDB/userSchema');

router.get('/',function(req,res){
    res.send('Hello User!! Welcome;)');
});

router.post('/',function(req,res){
    userModel.findOne({mailId : req.body.mailId, password: req.body.password})
    .then(function(user){
        if(user){
            res.status(200).send(`Welcome ${user.firstName}`);
        }
        else{
            res.status(401).send('Password Incorrect');
        }
    })
    .catch((err) => {    
            res.status(401).send(err); 
    }); 
});

module.exports = router;
