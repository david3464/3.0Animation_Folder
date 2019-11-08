var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('functions/1PhotoAnimation/4AutoCircleRotate', { layout: 'hero_layout' });
});

router.get('/about', function(req, res, next) {
    res.sendFile('testscript.html', {root: path.join(__dirname, '../files')});
  });
  

module.exports = router;
