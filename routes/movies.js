var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/movies');
var isLoggedin = require('../config/auth');

/* All routes start with '/movies' */

// GET /movies (index functionality - show all movies)
router.get('/', moviesCtrl.index);

// GET /movies/new  (new functionality - render 'new' form)
router.get('/new', isLoggedin, moviesCtrl.new);

// GET /movies/:id (show functionality - show single movie)
router.get('/:id', moviesCtrl.show);

// POST /movies/  (create functionality - create new movie)
router.post('/', isLoggedin, moviesCtrl.create);

module.exports = router;
