const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/posts"
router.route("/")
  .get(postsController.findPosts);
  

router.route("/brewing")
  .get(postsController.findBrewingPosts)
  .post(postsController.createBrewingPosts);

router.route("/coding")
  .get(postsController.findCodingPosts)
  .post(postsController.createCodingPosts);

router.route("/skiing")
  .get(postsController.findSkiingPosts)
  .post(postsController.createSkiingPosts);

module.exports = router;