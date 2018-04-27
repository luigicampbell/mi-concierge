var mongoose = require("mongoose");
const uuidv1 = require("uuid/v1");
var Schema = mongoose.Schema;

var userSchema = new Schema ({
	user_id: { type: String, index: true, unique: true, default: uuidv1() },
   first_name: String,
   last_name: String,
   phone_mobile: String,
   email_primary: String,
   password: String,
   date_created: Date,
   date_updated: { type: Date, default: Date.now }
});

var User = mongoose.model("User", userSchema);

module.exports = User;