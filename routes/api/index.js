const router = require("express").Router();
const userRoutes = require("./users");
const activityRoutes = require("./activities");
const postRoutes = require("./posts");
const commentRoutes = require("./comments");

// Routes
router.use("/users", userRoutes);
router.use("/activities", activityRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
