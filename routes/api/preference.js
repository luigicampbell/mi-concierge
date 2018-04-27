const router = require('express').Router();
const preferenceController = require('../../server/controllers/preference-controller');

// Matches with "/api/preference/:user_id/:category"
router
  .route("/:user_id/:category")
  .get(preferenceController.findPrefByUserIdCategory)

module.exports = router;