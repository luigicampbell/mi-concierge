var mongoose = require("mongoose");
const uuidv1 = require("uuid/v1");
var Schema = mongoose.Schema;

var productSchema = new Schema ({
	product_id: { type: String, index: true, unique: true, default: uuidv1() },
   category: String,
   sub_category: String,
   item_name: String,
   item_description: String,
   date_created: Date,
   date_updated: { type: Date, default: Date.now }
});

var Product = mongoose.model("Product", productSchema);

module.exports = Product;



