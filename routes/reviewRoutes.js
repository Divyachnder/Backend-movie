router.post("/:movieId", protect, async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const movie = await Movie.findById(req.params.movieId);
    if (!movie) return res.status(404).json({ message: "Movie not found" });

    const newReview = new Review({
      user: req.user._id,
      movie: movie._id,
      rating,
      comment,
    });

    await newReview.save();
    res.status(201).json({ message: "Review added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error adding review" });
  }
});
