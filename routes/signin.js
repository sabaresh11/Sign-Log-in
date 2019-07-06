const express = require('express');
const router = express.Router();
const userModel = require('../userDB/userSchema');

router.post('/',function(req,res){
    const user={
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mailId: req.body.mailId,
        password: req.body.password,
        bDay: req.body.bDay,
        gender: req.body.gender
    }

    var newUser = new userModel(user);

    //console.log(newUser);   
    newUser.save(function(err, result){
        if(err){
            //console.log('err',err);
            res.status(500).send(err); 
        }
        else{
            //console.log(result);
            res.status(200).send('User created Successfully');
        }

    });
    
});
module.exports = router;