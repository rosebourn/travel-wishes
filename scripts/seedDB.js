const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/trips"
  );
  
  const userSeed = [
      {
          name: "rosebourn",
          email: "rose34@gmail.com",
          password: "catsrule45",
          date: new Date(Date.now())
      },
      {
          name: "tomtom",
          email: "tommy687@gmail.com",
          password: "dogsdrool",
          date: new Date(Date.now())
      }
  ];

  db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });