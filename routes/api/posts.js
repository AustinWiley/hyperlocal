const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/posts"
router.route("/brewing")
  .get(postsController.findBrewingPosts);

router.route("/coding")
  .get(postsController.findCodingPosts);

router.route("/skiing")
  .get(postsController.findSkiingPosts);

module.exports = router;