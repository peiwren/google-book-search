const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/index");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use("/api", apiRoutes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

<<<<<<< HEAD
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://user:nextfav123@ds053196.mlab.com:53196/heroku_vf1k26b7"
);
=======
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:nextfav123<dbpassword>@ds053196.mlab.com:53196/heroku_vf1k26b7");
>>>>>>> f7c48808820c0ba42804c4a05899072c5ba406ef

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
