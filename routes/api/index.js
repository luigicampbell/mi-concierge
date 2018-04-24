const router = require("express").Router();
const userRoutes = require("./user");
const preferenceRoutes = require("./preference");
const productRoutes = require("./product");
// Book routes
router.use("/user", userRoutes);
router.use("/preference", preferenceRoutes);
router.use("/product", productRoutes);

module.exports = router;
