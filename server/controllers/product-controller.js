var User = require("../models/product");

module.exports = {

   /* Find products by category
   Returns product list with preference values (if any) from Preference controller
   Category:Sub Category, ...
   Dining:Food Allergies, Beverages, Food
   Hotel:Brand, Room Features, Services, Local Area
   Air:Carrier, Class, Seating, Service, Transportation
   Car:Carrier, Class, Environment

   */
  findProductByCategory: function(req, res) {
   console.log(req.params);
   User.find( {user_id: req.params.user_id} ).then(function(data) {
     res.json(data);
   }).catch(function(err) {
     res.json(err);
   });
 },
}
