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
  }
]

function createPreference (preference) {
  console.log("req",preference)
  console.log("Creating preference for user, product, value",preference.user_id, preference.product_id, preference.value);
  // set a UUID to preference_id
  preference.preference_id = uuidv1();
  // create preference in database
  return Preference.create(preference);
}

function deletePreference (preference_id) {
  console.log("deletePreference preference_id", preference_id)
  return Preference.deleteOne( {preference_id} )
}

module.exports = {

  createPreference: createPreference,

  deletePreference: deletePreference,

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

  // Update or remove preference by preference_id
  // 1) Lookup preference
  // 2) If exists then
  // 3)  if value = 0 then delete - return
  // 4)   else update preference
  // 5) else create preference
  updatePrefByUserIdProdID: function (req, res) {
    let {user_id, product_id, value} = req.params;
    // let user_id = req.params.user_id;
    // let product_id = req.params.product_id;
    // let value = req.params.value;
    Preference.findOneAndUpdate(
      // query
      { user_id: user_id,
        product_id: product_id
      },
      // set values 
      {
        value // value: value
      },
      // options
      {
        upsert: false
      },
      // callback function
      function (err, foundData) {
        console.log("err, foundData", err, foundData)
        if (!foundData) {
          if (value != 0) {
            console.log("didn't find record - creating")
            createPreference({
              user_id: user_id,
              product_id: product_id,
              value: value
            }).then(function (data) {
              res.json(data);
                }).catch(function (err) {
                  res.json(err);
                  })
          } else {
            res.json({results:'No preference found'})
          }
        } else {
          // delete the preferene record if value is 0
          if (value != 0) {
            console.log("found pref " + foundData.preference_id + " and updated to:", value)
            res.json({
                status:'updated',
                product_id:foundData.product_id,
                value:value
              })
            } else { // value = 0 so delete the stored preference
            deletePreference(foundData.preference_id)
            .then( data => {
              data.status='Preference Deleted'
              res.json(data)
            })
          }
          }
        }
      )
  },
// Model.findOneAndUpdate({ name: 'borne' }, { name: 'jason bourne' }, options, callback)

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
