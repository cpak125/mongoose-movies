const Movie = require('../models/movie');
const Performer = require('../models/performer');

module.exports = {
  index,
  new: newMovie,
  create,
  show
};

function index(req, res) {
  Movie.find({})
    .then(function(movies) {
      res.render('movies/index', {title: 'All Movies', movies});
    })
    .catch(function(err) {
      res.redirect('/movies');
    });
}

function newMovie(req, res) {
  res.render('movies/new', {title: 'Add Movie'});
}

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "one" to a boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // remove leading and trailing spaces
  req.body.cast = req.body.cast.trim();
  // split cast into an array if it's a non-empty string
  // use regex as a separator
  if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const movie = new Movie(req.body);
  movie.save(function(err) {
    // one way to handle errors
    if (err) return res.render('movies/new');
    console.log(movie);
    res.redirect(`/movies/${movie._id}`);
  });
}

function show(req, res) {
  Movie.findById(req.params.id)
    .populate('cast')
    .exec(function(err, movie) {
      // Performer.find({}).where('_id').nin(movie.cast) <-- Mongoose query builder
      // Native MongoDB approach
      Performer.find({_id: {$nin: movie.cast}})
        .exec(function(err, performers) {
          res.render('movies/show', {title: 'Movie Details', movie, performers});
        });
    });
};