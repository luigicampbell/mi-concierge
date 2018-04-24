const router = require('express').Router();
const userController = require('../../server/controllers/user-controller');

// Matches with "/api/users/" -> Create User
router.route("/")
  .post(userController.createUser);

// Find by user_id 
router
  .route("/id/:user_id")
  .get(userController.findUserById)
  .put(userController.updateUserById)
  .delete(userController.deleteUserById);

// Allows find by email
router
  .route("/email/:email_primary")
  .get(userController.findUserByEmail)

module.exports = router;
