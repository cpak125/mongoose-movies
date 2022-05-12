const Movie = require('../models/movie');

module.exports = {
  new: newMovie,
  create
};

function newMovie(req, res) {
  res.render('movies/new');
}

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "one" to a boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // remove leading and trailing spaces
  req.body.cast = req.body.cast.trim();
  // split cast into an array if it's a non-empty string
  // use regex as a separator
  if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
  const movie = new Movie(req.body);
  movie.save(function(err) {
    // one way to handle errors
    if (err) return res.render('movies/new');
    console.log(movie);
    // redirect back to movies - index.ejs
    res.redirect('/movies/new');
  });
}