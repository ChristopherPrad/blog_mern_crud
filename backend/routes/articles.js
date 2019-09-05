const router = require("express").Router();
let Exercise = require("../models/article");

router.route("/").get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const geolocal = req.body.geolocal;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    geolocal,
    duration,
    date
  });

  newExercise
    .save()
    .then(() => res.json("Article added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
