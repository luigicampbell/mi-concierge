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

const userSeed = [
  {
    user_id: uuidv1(),
    first_name: "Scott",
    last_name: "Reynolds",
    phone_mobile: "323-633-6980",
    email_primary: "scott@scottreynolds.net",
    password: "password",
    date_created: Date.now,
    data_updated: ""
  },
  {
    user_id:  uuidv1(),
    first_name: "David",
    last_name: "Jones",
    phone_mobile: "310-587-8967",
    email_primary: "davidjones@gmail.com",
    password: "mypassword",
    date_created: Date.now,
    data_updated: ""
  },
  {
    user_id:  uuidv1(),
    first_name: "Roger",
    last_name: "Clarkson",
    phone_mobile: "714-269-9986",
    email_primary: "rgcl@gmail.com",
    password: "passWord",
    date_created: Date.now,
    data_updated: ""
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
