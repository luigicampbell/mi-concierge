const Product = require("../models/Product");

module.exports = {

   /* Find products by category
   Returns product list with preference values (if any) from Preference controller
   Category:Sub Category, ...
   Dining:Food Allergies, Beverages, Food
   Hotel:Brand, Room Features, Services, Local Area
   Air:Carrier, Class, Seating, Service, Transportation
   Car:Carrier, Class, Environment

   */
  findProductsByCategory: function(req, res) {
   Product.find( {category: req.params.category} ).then(function(data) {
     res.json(data);
   }).catch(function(err) {
     res.json(err);
   });
 }
}
