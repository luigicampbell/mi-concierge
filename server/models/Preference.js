var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var preferenceSchema = new Schema ({
	user_id: String,
   product_id: String,
   value: Boolean,
   note: String,
   date_created: Date,
   date_updated: { type: Date, default: Date.now }
});

var Preference = mongoose.model("Preference", preferenceSchema);

module.exports = Preference;