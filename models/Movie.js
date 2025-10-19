const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
  username: String,
  rating: Number,
  comment: String,
});
const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  posterUrl: String,
  reviews: [reviewSchema],
});
module.exports = mongoose.model("Movie", movieSchema);
