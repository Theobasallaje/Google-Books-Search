const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: [String], required: true },
  description: String,
  imageLinks: [{
    smallThumbnail: String,
    thumbnail: String
  }],
  canonicalVolumeLink: String,
  id: String
});

const GoogleBooks = mongoose.model("Googlebooks", bookSchema);

module.exports = GoogleBooks;
