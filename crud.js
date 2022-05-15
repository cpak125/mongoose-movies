// Load the "secrets" in the .env file
require('dotenv').config();
// connect to the MongoDB database with Mongoose
require('./config/database');

const Movie = require('./models/movie');
const Performer = require('./models/performer');

let movies, performers, movie, performer;

Movie.find({}, function(err, movieDocs) {
  movies = movieDocs;
});