const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    geolocal: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

const Article = mongoose.model("Articles", articleSchema);

module.exports = Article;
