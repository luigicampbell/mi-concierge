const Preference = require("../models/preference");
const Product = require("../models/product");
const uuidv1 = require("uuid/v1");
const testArray = [
  {
  product_id: 1,
  item_name: "Jello",
  value: false
  },
  {
    product_id: 2,
    item_name: "Peeps",
    value: null
  },
  {
    product_id: 3,
    item_name: "Coolaid",
    value: true
  },
]

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

  // Find preferences by user_id and category [Dining, Airline, Hotel, Auto]
  // called from /api/preference/:user_id/:category

  findPrefByUserIdCategory: function (req, res) {
    let user_id = req.params.user_id;
    let category = req.params.category;
    console.log('findPrefByUserIdCategory for:', user_id, category);
    let newProducts = [];
    let preferences = [];
    let productsPrefs = [];
    // Search the product table for all product_id's in the category
    Product.find({ category: category })
      .then( products => {
        // copy all return product_id's to productId array
        newProducts = products.map(function(product){
          return product.toObject();
        })
        console.log("newProducts",newProducts);
        // newProducts = products.toObject()
        let productIds = newProducts.map(function(product){
          return product.product_id
        })
        console.log("productIds",productIds);
        // find all productId[] with user_id preference and store in preferences[]
        Preference.find({
          user_id: user_id, 
          product_id: { $in: productIds}
        }
        ,'product_id value')
        .then( prefResults => {
          preferences = prefResults.map(function(pref){
            return pref.toObject();
          })
          console.log("preferences.length - preferences[0].product_id - value",preferences.length, preferences[0].product_id,preferences[0].value);
          // match and move productId[] and preferences[] to productsPrefs[] and return JSON
          debugger;
          for (let i=0; i < newProducts.length; i++) {
            for (let j=0; j < preferences.length; j++) {
              if (newProducts[i].product_id === preferences[j].product_id) {
                newProducts[i].value = preferences[j].value;
                break
              } else {
                newProducts[i].value = null;
              }
            }
          }
          console.log("newProducts", newProducts);
          res.json(newProducts)
          // res.json(testArray)
        }
      )
      })
      .catch(function (err) {
        console.log("findPrefByUserIdCategory Error", err)
      })
  }
}

    
      //   // return the preferences if product_id's and user_id match
      //   // Preferene.find --
      //   Preference.findOne({
      //     user_id: user_id, // query for user_id
      //     product_id: products[0].product_id // and product_ids
      //   },
      //   'value'
      //   ,function(err, data) {
      //     if (err) return err;
      //     let prefObj = products[0].toObject();
      //     prefObj.value = data.value;
      //     console.log("prefObj",prefObj)
      //   }
      // )
  // return
      // this stuff needs to be updated with above toObject()
        // for (let i=0; i < products.length; i++ ) {
        //   console.log("Matching product", products[i].item_name)
        //   Preference.findOne(
        //     {
        //     user_id: user_id, // query for user_id
        //     product_id: products[i].product_id // and product_ids
        //     }
        //     , 'value product_id' //return keys and values from database
        //     , function (err, data) {
        //       if (err) return err;
        //       if (data) {
        //         console.log("Found a match for item",i, data.product_id,data.value)
        //         console.log("this is the product we want to add value too",products[i])
        //         products[i].value = data.value;
        //         console.log("updated products",products[i].value);
        //         debugger;
