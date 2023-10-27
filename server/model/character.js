const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const characterSchema = new Schema({
  name: String,
  title: String,
  family: String,
  img: String,
  imgurl: String,
  councilMember: Boolean,
  isAlive: Boolean,
  location: String,
  sex: String,
});

const Character = model("Character", characterSchema);

module.exports = Character;
