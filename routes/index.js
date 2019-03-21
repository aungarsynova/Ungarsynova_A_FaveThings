var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //et data from the db, and the send it through the route to the index.hbs page and render that (including our DB data)
  connect.query(`SELECT name, avatar FROM hero`, (err, result) => {
    if (err) {
      throw err;
      console.log(err);
    } else {
      console.log(result)
      res.render('index', { avatars: result });
    }
  });
  // res.render('index', { title: 'Express' });
});

//get one heroe's bio information
router.get('/:hero', function(req, res, next) {
  //et data from the db, and the send it through the route to the index.hbs page and render that (including our DB data)
  connect.query(`SELECT * FROM hero WHERE name="${req.params.hero}"`, (err, result) => {
    if (err) {
      throw err;
      console.log(err);
    } else {
      console.log(result)
      res.render('bio', { bioData: result[0] });
    }
  });
  // res.render('index', { title: 'Express' });
});


module.exports = router;
