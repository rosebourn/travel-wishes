const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
// const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
const app = express();
const db = require("./config/keys").mongoURI;
const passport = require("passport");
require("./models/user");


const users = require("./routes/api/users.js");

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log("STOP:",err));

  // Passport middleware
  app.use(passport.initialize());

  // Passport config
  require("./config/passport")(passport);

  // Routes
  app.use("/api/users", users);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
