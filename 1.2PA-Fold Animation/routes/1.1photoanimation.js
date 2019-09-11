var express = require('express');
var router = express.Router();
//app.use('/1.1PA/',photoanimationRouter);

router.get('/javascriptsbackgroundexample', function(req, res, next) {
    res.render('1javascriptexample/1photoanimation/1javascriptsBackgroundExample', { title: 'Javascripts Background Example'});
  });
  
  router.get('/2slideroatate', function(req, res, next) {
    res.render('1javascriptexample/1photoanimation/2sliderotate', { title: '3D图片折叠特效'});
  });

module.exports = router;
