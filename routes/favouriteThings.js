let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// create a reference to the favouriteThings db schema
let favouriteThing = require("../models/favouriteThings");

/* GET contact list page - READ */
router.get("/", (req, res, next) => {
  favouriteThing.find((err, favouriteThingsList) => {
    if (err) {
      return console.error(err);
    } else {
      console.log(favouriteThingsList);
      res.render("index", {
        title: "Favourite Things List",
        favouriteThingsList: favouriteThingsList
      });
    }
  });
});

module.exports = router;
