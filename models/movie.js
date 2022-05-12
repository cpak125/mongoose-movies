const mongoose = require('mongoose');

// optional shortcut to mongoose.Schema class
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  releaseYear: Number,
  mpaaRating: String,
  cast: [String],
  nowShowing: Boolean
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Movie', movieSchema);

