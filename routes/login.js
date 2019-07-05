const express = require('express');
const router = express.Router();
const userModel = require('../userDB/userSchema');

router.get('/',function(req,res){
    res.send('Hello User!! Welcome;)');
});

router.get('/users/',function(req,res){
    userModel.find().then(function(data){
        res.send(data);
    })
});

router.post('/login/',function(req,res){
    userModel.find({mailId : req.body.mailId}).then(function(user){
        //console.log();
        if(user.password == req.body.password){
            res.status(200).send('Welcome!!');
        }
        else{
            res.status(401).send('Password Incorrect!!');
        }
    })
    
})

router.post('/signin/',function(req,res){
    const user={
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mailId: req.body.mailId,
        password: req.body.password,
        bDay: req.body.bDay,
        gender: req.body.gender
    }

    var newUser = new userModel(user);

    console.log(newUser);   
    newUser.save(function(err, result){
        if(err){
            console.log('err',err);
            res.status(500).send(err); 
        }
        else{
            console.log(result);
            res.status(200).send('User created Successfully');
        }

    });
    
});


module.exports = router;
