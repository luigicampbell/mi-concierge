require('dotenv').config();
const mongoose = require("mongoose");
const uuidv1 = require('uuid/v1');
const db = require("../server/models");

// This file empties the Books collection and inserts the books below

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, function(error) {
  if (error) {
    console.error(`Error Connecting to MongoDB: ${error}`);
  }
  else {
    console.log("Successfull connection to MongoDB");
  }
});

const preferenceSeed = [
  {
    preference_id: uuidv1(),
    user_id: "073af1f0-49b2-11e8-a2cb-936548b8bb4a",
    product_id: "51221fb0-49b1-11e8-b30e-b94cdcb2b4b2",
    value: true,
    note: "my preference",
    date_created: Date.now,
    data_updated: ""
  },
  {
    preference_id: uuidv1(),
    user_id: "073af1f0-49b2-11e8-a2cb-936548b8bb4a",
    product_id: "51221fb2-49b1-11e8-b30e-b94cdcb2b4b2",
    value: false,
    note: "my preference",
    date_created: Date.now,
    data_updated: ""
  },
  {
    preference_id: uuidv1(),
    user_id: "073af1f0-49b2-11e8-a2cb-936548b8bb4a",
    product_id: "51221fb5-49b1-11e8-b30e-b94cdcb2b4b2",
    value: true,
    note: "my preference",
    date_created: Date.now,
    data_updated: ""
  },
  {
    preference_id: uuidv1(),
    user_id: "6ae47080-5274-11e8-a84e-1b00935463bf",
    product_id: "51221fb0-49b1-11e8-b30e-b94cdcb2b4b2",
    value: true,
    note: "my preference",
    date_created: Date.now,
    data_updated: ""
  },
  {
    preference_id: uuidv1(),
    user_id: "6ae47080-5274-11e8-a84e-1b00935463bf",
    product_id: "51221fb2-49b1-11e8-b30e-b94cdcb2b4b2",
    value: false,
    note: "my preference",
    date_created: Date.now,
    data_updated: ""
  },
  {
    preference_id: uuidv1(),
    user_id: "6ae47080-5274-11e8-a84e-1b00935463bf",
    product_id: "51221fb5-49b1-11e8-b30e-b94cdcb2b4b2",
    value: true,
    note: "my preference",
    date_created: Date.now,
    data_updated: ""
  }
];

db.Preference
  .remove({})
  .then(() => db.Preference.collection.insertMany(preferenceSeed))
  .then(data => {
    console.log(data.insertedIds + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
