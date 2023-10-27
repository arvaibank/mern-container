//require("dotenv").config();
const fetch = require("node-fetch")
const Character = require("./model/character.js");
const mongoose = require("mongoose");
const { MONGODB_URI } = process.env;

const families = [
  { name: "House Stark", location: "Winterfell" },
  { name: "House Lannister", location: "Casterly Rock" },
  { name: "House Targaryen", location: "Dragonstone" },
  { name: "House Baratheon", location: "Storms End" },
  { name: "House Greyjoy", location: "Pyke" },
  { name: "House Martell", location: "Sunspear" },
  { name: "House Tyrell", location: "Highgarden" },
  { name: "House Arryn", location: "The Eyrie" },
  { name: "House Tully", location: "Riverrun" },
  { name: "House Frey", location: "The Twins" },
  { name: "House Bolton", location: "Dreadfort" },
  { name: "House Mormont", location: "Bear Island" },
  { name: "House Umber", location: "Last Hearth" },
  { name: "House Karstark", location: "Karhold" },
  { name: "House Glover", location: "Deepwood Motte" },
  { name: "House Clegane", location: "Cleganes Keep" },
  { name: "House Mallister", location: "Seagard" },
  { name: "House Reed", location: "Greywater Watch" },
  { name: "House Dayne", location: "Starfall" },
  { name: "House Tarly", location: "Horn Hill" },
];

const seed = async () => {
  await mongoose.connect(MONGODB_URI);

  const API_URL = "https://thronesapi.com/api/v2/Characters";
  const response = await fetch(API_URL);
  const data = await response.json();

  const characters = data.map((char) => {
    const name = char.fullName;
    const title = char.title;
    const family = char.family;
    const img = char.image;
    const imgurl = char.imageUrl;
    const councilMember = false;
    const isAlive = true;
    const location = "";
    const quotes = [""];
    const character = new Character({
      name,
      title,
      family,
      img,
      imgurl,
      councilMember,
      isAlive,
      location,
      quotes,
    });
    const familyData = families.find(
      (family) => family.name === character.family
    );
    if (familyData) {
      character.location = familyData.location;
    }
    return character;
  });

  await Character.insertMany(characters);
  console.log("Characters created");
};

seed()
  .catch((err) => console.error(err))
  .finally(() => {
    mongoose.disconnect();
  });
