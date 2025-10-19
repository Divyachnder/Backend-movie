const Review = require("../models/Review");

exports.getReviewsByMovie = async (req, res) => {
  try {
    const reviews = await Review.find({ movie: req.params.movieId }).populate("user", "name");
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews" });
  }
};

exports.addReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: "Error adding review" });
  }
};
