const mongoose = require("mongoose");
const db = require("../server/models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mi-concierge"
);

const userSeed = [
  {
    user_id: "ABCDEF",
    first_name: "Scott",
    last_name: "Reynolds",
    phone_mobile: "323-633-6980",
    email_primary: "scott@scottreynolds.net",
    password: "password",
    date_created: Date.now,
    data_updated: ""
  },
  {
    user_id: "GHIJK",
    first_name: "David",
    last_name: "Jones",
    phone_mobile: "310-587-8967",
    email_primary: "davidjones@gmail.com",
    password: "mypassword",
    date_created: Date.now,
    data_updated: ""
  },
  {
    user_id: "LMNOP",
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
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
