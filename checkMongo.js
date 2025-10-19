const mongoose = require("mongoose");

async function checkMongoConnection() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB is running and connected successfully!");
    await mongoose.connection.close();
  } catch (err) {
    console.error("❌ MongoDB is NOT running or connection failed!");
    console.error(err.message);
  }
}

checkMongoConnection();
