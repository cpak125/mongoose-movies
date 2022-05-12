var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/movies');


/* All routes start with '/movies' */

// GET /movies (index functionality - show all movies)
router.get('/', moviesCtrl.index);

// GET /movies/new  (new functionality - render 'new' form)
router.get('/new', moviesCtrl.new);

// POST /movies/  (create functionality - create new movie)
router.post('/', moviesCtrl.create);

module.exports = router;
