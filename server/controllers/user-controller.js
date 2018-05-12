const User = require("../models/User");
const uuidv1 = require("uuid/v1");

module.exports = {
  // Create User
  createUser: function (req, res) {
    // set a UUID to user_id
    req.body.user_id = uuidv1();
    // create user in database
    User.create(req.body).then(function (data) {
      res.json(data);
    }).catch(function (err) {
      res.json(err);
    });
  },

  // Find user by user_id
  findUserById: function (req, res) {
    console.log(req.params);
    User.find({ user_id: req.params.user_id }).then(function (data) {
      res.json(data);
    }).catch(function (err) {
      res.json(err);
    });
  },

  // Find user by email_primary
  findUserByEmail: function (req, res) {
    console.log(req.params);
    User.find({ email_primary: req.params.email_primary }).then(function (data) {
      res.json(data);
    }).catch(function (err) {
      res.json(err);
    });
  },

  // Delete user by user_id
  deleteUserById: function (req, res) {
    User.findOneAndRemove({
      user_id: req.params.user_id
    }).then(function (data) {
      const response = Object.assign({ status: "Successfully removed user" }, data._doc);
      res.json(response);
    }).catch(function (err) {
      res.json(err);
    });
  },

  // Update user by user_id
  updateUserById: function (req, res) {
    User.findOneAndUpdate({ user_id: req.params.user_id },
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_mobile: req.body.phone_mobile
      }).then(function (data) {
        console.log(data)
        const response = Object.assign({ status: "Successfully updated" }, data._doc);
        res.json(response);
      }).catch(function (err) {
        res.json(err);
      });
  }
}