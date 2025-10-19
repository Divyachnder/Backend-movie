// routes/movieRoutes.js
const express = require("express");
const router = express.Router();
const { getMovies, addReview } = require("../controllers/movieController");
const { verifyToken } = require("../middleware/authMiddleware");

router.get("/", getMovies); // get all movies
router.post("/:id/review", verifyToken, addReview); // add review (user must be logged in)

module.exports = router;
