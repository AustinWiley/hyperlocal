const router = require("express").Router();
const bookRoutes = require("./posts");

// Book routes
router.use("/posts", bookRoutes);

module.exports = router;
