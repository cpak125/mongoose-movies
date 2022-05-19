const Movie = require('../models/movie');

module.exports = {
  create
};

function create(req, res) {
  Movie.findById(req.params.id, function(err, movie) {
    // Add the user-centric info to req.body
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    //  We can push subdocs into Mongoose arrats
    movie.reviews.push(req.body);
    movie.save(function(err) {
      // Step 5: Respond with a redirect b/c we've mutated data
      res.redirect(`/movies/${movie._id}`);
    });
  });
}