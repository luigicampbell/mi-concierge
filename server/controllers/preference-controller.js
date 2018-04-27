const Preference = require("../models/preference");
const Product = require("../models/product");
const uuidv1 = require("uuid/v1");

module.exports = {
   // Create Preference
   createPreference: function (req, res) {
      // set a UUID to user_id
      req.body.user_id = uuidv1();
      // create user in database
      Preference.create(req.body).then(function (data) {
         res.json(data);
      }).catch(function (err) {
         res.json(err);
      });
   },

   // Find preference by preference_id
   findPrefByPrefId: function (req, res) {
      console.log(req.params);
      Preference.find({ preference_id: req.params.preference_id }).then(function (data) {
         res.json(data);
      }).catch(function (err) {
         res.json(err);
      });
   },

   // Find preferences by user_id
   findPrefsByUserId: function (req, res) {
      console.log(req.params);
      Preference.find({ user_id: req.params.user_id }).then(function (data) {
         res.json(data);
      }).catch(function (err) {
         res.json(err);
      });
   },

   // Find preferences by product_id
   findPrefsByProductId: function (req, res) {
      console.log(req.params);
      Preference.find({ product_id: req.params.product_id }).then(function (data) {
         res.json(data);
      }).catch(function (err) {
         res.json(err);
      });
   },

   // Delete user by user_id
   //   deleteUserById: function (req, res) {
   //     User.findOneAndRemove({
   //       user_id: req.params.user_id
   //     }).then(function (data) {
   //       const response = Object.assign({ status: "Successfully removed user" }, data._doc);
   //       res.json(response);
   //     }).catch(function (err) {
   //       res.json(err);
   //     });
   //   },



   // Update preference by preference_id
   updatePrefByPrefId: function (req, res) {
      User.findOneAndUpdate({ preference_id: req.params.preference_id },
         {
            value: req.body.value,
            note: req.body.note
         }).then(function (data) {
            console.log(data)
            const response = Object.assign({ status: "Successfully updated" }, data._doc);
            res.json(response);
         }).catch(function (err) {
            res.json(err);
         });
   },


   // Find preferences by user_id and category
   findPrefByUserIdCategory: function (req, res) {
      let user_id = req.params.user_id;
      let category = req.params.category;
      console.log(user_id, category);
      let productArray = [];
      let prefsArray = [];
      Product.find( { category: category } )
      .then(function (data) {
         // console.log("Category Data",data)
         const productPrefData = data.map(function(obj, idx) {
            console.log(idx, obj)
            Preference.findOne({
               user_id: user_id,
               product_id: obj.product_id
            })            
            .then(function(data){
               if (data) {
                  console.log("value is", data.value)
                  res.json(data.value)
               }
            })
         })
      })
      .catch(function (err) {
         console.log("findPrefByUserIdCategory Error",err)
      })
      
   }
}
