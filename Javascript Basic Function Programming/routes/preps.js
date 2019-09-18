var express = require('express');
var router = express.Router();

// app.use('/func_preps', prepsRouter);

//router address localhost:2001/func_preps/test
//descriptions: Lecutre One Javascript
//comments: 
router.get('/test', function(req, res, next) {
    res.render('functions/preps/test');
  });


module.exports = router;
