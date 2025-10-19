// backend/seed.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Movie = require("./models/Movie");

dotenv.config();

const movies = [
  {
    title: "Inception",
    description: "A mind-bending thriller by Christopher Nolan.",
    posterUrl: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg",
    reviews: [],
  },
  {
    title: "The Dark Knight",
    description: "Batman faces the Joker in Gotham City.",
    posterUrl: "https://m.media-amazon.com/images/I/51EbJjlVzDL._AC_.jpg",
    reviews: [],
  },
  {
    title: "Interstellar",
    description: "Exploration of space and time to save humanity.",
    posterUrl: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
    reviews: [],
  },
  {
    title: "Avengers: Endgame",
    description: "Superheroes unite to defeat Thanos.",
    posterUrl: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
    reviews: [],
  },
  {
    title: "The Matrix",
    description: "A hacker discovers the true nature of reality.",
    posterUrl: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
    reviews: [],
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected. Seeding movies...");
    await Movie.deleteMany({}); // optional: clear existing movies
    await Movie.insertMany(movies);
    console.log("Movies seeded successfully!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });
