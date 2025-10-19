const Movie = require("../models/Movie");

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.addReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, rating, comment } = req.body;
    const movie = await Movie.findById(id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });

    movie.reviews.push({ username, rating, comment });
    await movie.save();
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);
    res.json({ message: "Movie deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
