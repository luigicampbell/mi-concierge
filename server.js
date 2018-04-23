const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
else {
  app.use(express.static(__dirname + "/client/public"));
}

// var articles = require("./server/controllers/article-controller");
// var router = new express.Router();

// router.get("/api/saved", articles.find);
// router.post("/api/saved", articles.insert);
// router.delete("/api/saved/:id", articles.delete);

app.use(router);

const db = process.env.MONGODB_URI || "mongodb://localhost/nyt-react";
mongoose.connect(db, function(error) {
  if (error) {
    console.error(`Error Connecting to MongoDB: ${error}`);
  }
  else {
    console.log("Successfull connection to MongoDB");
  }
});

app.listen(PORT, function() {
  console.log(`Express Server Listening on PORT: ${PORT}!`);
});
