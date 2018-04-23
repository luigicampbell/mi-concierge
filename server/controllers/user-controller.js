var User = require("../models/User");

module.exports = {
  // Create User
  create: function(req, res) {
   User.create(req.body).then(function(data) {
     res.json(data);
   }).catch(function(err) {
     res.json(err);
   });
   },
   // Find User
  find: function(req, res) {
    User.find( {email: req.body.email_primary} ).then(function(data) {
      res.json(data);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // Delete User
  delete: function(req, res) {
    User.remove({
      _id: req.params.id
    }).then(function(data) {
      res.json(data);
    }).catch(function(err) {
      res.json(err);
    });
  },
   // Update User
   update: function(req, res) {
      User.findById(id, function(err, user) {
         if (err) return (
            res.json(err)
         )
         user.set(req.body)
      });
   }
}