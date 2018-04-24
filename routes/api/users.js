var express = require('express');

const router = require('express').Router();
const userController = require('../../server/controllers/user-controller');

// Matches with "/api/users/"
router.route("/")
  .post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.find)
  .put(userController.update)
  .delete(userController.delete);

module.exports = router;
