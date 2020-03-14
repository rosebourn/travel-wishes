const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const db = require("./config/keys").mongoURI;
const passport = require("passport");
const users = require("./routes/api/users");

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  // Passport middleware
  app.use(passport.initialize());

  // Passport config
  require("./config/passport")(passport);

  // Routes
  app.use("/api/users", users);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log(`🌎 ==> API server now on port ${port}!`);
});
