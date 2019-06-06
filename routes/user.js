var express = require('express');
var router = express.Router();
var User = require('../models/Users');

var express = require()
router.post('/register', function(req,res,next){
  console.log("ok")
   if( req.body.email &&
       req.body.name &&
      req.body.password &&
       req.body.password2){

       //check for same pw
       if(req.body.password !== req.body.password2){
         var err = new Error("Passwords do not match");
         err.status = 400;
         res.render('error', {errormessage: err})
         return next(err);
       }
       //object to store user data
         var userData = {
           email: req.body.email,
           name:req.body.name,
           password:req.body.password
         };
         //insert data into mongo
          User.create(userData, function(error, user){
            if(error){
              return next(error);
            }else{
              res.render( 'dashboard', {message: user.name})
              console.log("working")

             }
          });
        } else {
         var err = new Error("All fields required");
         err.status = 400;
    res.render('error', {errormessage: err})
         return next(err);
       }
});
module.exports = router;
