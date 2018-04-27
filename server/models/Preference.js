var mongoose = require("mongoose");
const uuidv1 = require("uuid/v1");
var Schema = mongoose.Schema;

var preferenceSchema = new Schema ({
   preference_id: { type: String, default: uuidv1() },
   user_id: { type: String, index: true },
   product_id: { type: String, index: true },
   value: Boolean,
   note: String,
   date_created: Date,
   date_updated: { type: Date, default: Date.now }
});

var Preference = mongoose.model("Preference", preferenceSchema);

module.exports = Preference;