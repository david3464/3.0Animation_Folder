var express = require('express');
var router = express.Router();

//router address localhost:2001/func_preps/test
//descriptions: Test for Leetcode Problem
//comments: 
router.get('/test', function(req, res, next) {
  res.render('functions/preps/test');
});

//router address localhost:2001/func_preps/01
//descriptions: Prerequisite Course One Javascript
//comments: 
router.get('/01', function(req, res, next) {
    res.render('functions/preps/lecture01');
  });

//router address localhost:2001/func_preps/02
//descriptions: Prerequisite Course One Javascript
//comments: 
router.get('/02', function(req, res, next) {
  res.render('functions/preps/lecture02');
});

//router address localhost:2001/func_preps/03
//descriptions: Prerequisite Course One Javascript
//comments: 
router.get('/03', function(req, res, next) {
  res.render('functions/preps/lecture03');
});

//router address localhost:2001/func_preps/04
//descriptions: Prerequisite Course One Javascript
//comments: 
router.get('/04', function(req, res, next) {
  res.render('functions/preps/lecture04');
});


module.exports = router;
