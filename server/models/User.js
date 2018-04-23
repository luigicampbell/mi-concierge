var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema ({
	user_id: { type: String, index: true, unique: true },
   first_name: String,
   last_name: String,
   phone_mobile: String,
   email_main: String,
   password: String,
   date_created: Date,
   date_updated: { type: Date, default: Date.now }
});

var User = mongoose.model("User", userSchema);

module.exports = User;