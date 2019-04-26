const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");
const postsController = require("../../controllers/postsController");

// Matches with "/api/comments"
router.route("/")
  .get(commentsController.findComments);
  

  router.route("/brewing")
  .get(postsController.findBrewingComments)
  .post(postsController.createBrewingComments);

  router
  .route("/brewing/:id")
  .post(commentsController.createComment)
  .get(commentsController.findById)
  .put(commentsController.update)
  .delete(commentsController.remove);

router.route("/coding")
  .get(commentsController.findCodingComments)
  .post(commentsController.createCodingComments);

router.route("/skiing")
  .get(commentsController.findSkiingComments)
  .post(commentsController.createSkiingComments);

module.exports = router;