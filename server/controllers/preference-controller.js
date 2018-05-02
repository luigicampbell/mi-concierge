const Preference = require("../models/preference");
const Product = require("../models/product");
const uuidv1 = require("uuid/v1");

module.exports = {
      // Create Preference
      // UNTESTED
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
      // UNTESTED
      findPrefByPrefId: function (req, res) {
            console.log(req.params);
            Preference.find({ preference_id: req.params.preference_id }).then(function (data) {
                  res.json(data);
            }).catch(function (err) {
                  res.json(err);
            });
      },

      // Find preferences by user_id
      // UNTESTED
      findPrefsByUserId: function (req, res) {
            console.log(req.params);
            Preference.find({ user_id: req.params.user_id }).then(function (data) {
                  res.json(data);
            }).catch(function (err) {
                  res.json(err);
            });
      },

      // Find preferences by product_id
      // UNTESTED
      findPrefsByProductId: function (req, res) {
            console.log(req.params);
            Preference.find({ product_id: req.params.product_id }).then(function (data) {
                  res.json(data);
            }).catch(function (err) {
                  res.json(err);
            });
      },

      // Update preference by preference_id
      // UNTESTED
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
            console.log('findPrefByUserIdCategory for:',user_id, category);
            let productArray = [];
            let prefsArray = [];
            // Search the product table for all product_id's in the category
            Product.find({ category: category })
            .then(function (products) {
                  // console.log("Returned Products", products)
                  // return the preferences if product_id's and user_id match
                  const productPrefData = products.map(function (obj, idx) {
                  Preference.findOne({
                        user_id: user_id,
                        product_id: obj.product_id
                        })
                        // if user_id and product_id have a record return it: null, true, false            
                        .then(function (data) {
                              console.log("data ", data)
                              if (data) {
                                    console.log("preference.controller findPrefByUserIdCategory value :", data)
                                    var newobj = Object.assign({value:data.value}, obj)
                                    return newobj;
                              }
                        })
                  })
            res.json(data)
      })

      .catch(function (err) {
            console.log("findPrefByUserIdCategory Error", err)
      })

      }
}
