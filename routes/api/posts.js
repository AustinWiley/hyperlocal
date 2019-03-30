const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/posts"
router.route("/brewing")
  .get(postsController.findBrewingPosts);

module.exports = router;