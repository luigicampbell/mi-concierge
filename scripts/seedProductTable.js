require('dotenv').config();
const mongoose = require("mongoose");
const uuidv1 = require('uuid/v1');
const db = require("../server/models");
// This file empties the Books collection and inserts the books below

mongoose.Promise = global.Promise;
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI, function (error) {
   if (error) {
      console.error(`Error Connecting to MongoDB: ${error}`);
   }
   else {
      console.log("Successfull connection to MongoDB");
   }
});

const productSeed = [
   {
      product_id: uuidv1(),
      category: "dining",
      sub_category: "allergies",
      item_name: "Shellfish",
      item_description: "Allergy to shellfish",
      date_created: Date.now,
      date_updated: null
   },
   {
      product_id: uuidv1(),
      category: "dining",
      sub_category: "allergies",
      item_name: "Peanuts",
      item_description: "Allergy to peanuts",
      date_created: Date.now,
      date_updated: null
   },
   {
      product_id: uuidv1(),
      category: "dining",
      sub_category: "beverages",
      item_name: "Pelegrino",
      item_description: "Pelegrino Italian sparkling water",
      date_created: Date.now,
      date_updated: null
   },
   {
      product_id: uuidv1(),
      category: "dining",
      sub_category: "beverages",
      item_name: "Kettle One Vodka",
      item_description: "Kettle One Vodka",
      date_created: Date.now,
      date_updated: null
   },
   {
      product_id: uuidv1(),
      category: "dining",
      sub_category: "beverages",
      item_name: "Grey Goose Vodkaa",
      item_description: "Grey Goose Vodka",
      date_created: Date.now,
      date_updated: null
   },
   {
      product_id: uuidv1(),
      category: "dining",
      sub_category: "beverages",
      item_name: "Hendricks Splash",
      item_description: "Hendricks rocks splash Pelegrino with lemon",
      date_created: Date.now,
      date_updated: null
   },
   {
      product_id: uuidv1(),
      category: "dining",
      sub_category: "food",
      item_name: "Vegetarian diet",
      item_description: "No meat",
      date_created: Date.now,
      date_updated: null
   },
   {
      product_id: uuidv1(),
      category: "dining",
      sub_category: "food",
      item_name: "Vegan non-dairy",
      item_description: "No animal products",
      date_created: Date.now,
      date_updated: null
   },
   {
      product_id: uuidv1(),
      category: "dining",
      sub_category: "food",
      item_name: "Hindu",
      item_description: "Hindu Lacto-vegetarian",
      date_created: Date.now,
      date_updated: null
   }
];

db.Product
   .remove({})
   .then(() => db.Product.collection.insertMany(productSeed))
   .then(data => {
      console.log(data.insertedIds.length + " records inserted!");
      process.exit(0);
   })
   .catch(err => {
      console.error(err);
      process.exit(1);
   });
