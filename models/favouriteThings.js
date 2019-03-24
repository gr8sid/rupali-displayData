let mongoose = require("mongoose");

// create a model class
let favouriteSchema = mongoose.Schema(
  {
    firstname: String,
    lastname: String
  },
  {
    collection: "favouriteThings"
  }
);

module.exports = mongoose.model("rupali", favouriteSchema);
