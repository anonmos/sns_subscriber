let express = require('express');
let router = express.Router();

let last = null

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

router.post('/', function(req, res, next){
  last = req.body
  res.send('OK')
})

router.get('/last', function(req, res, next){
  res.json(last)
})

module.exports = router;
