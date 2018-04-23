var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

const router = require('express').Router();
const userController = require('../../controllers/user-controller');

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
