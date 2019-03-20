const router = require("express").Router();
const postssController = require("../../controllers/postsController");


// Matches with "/api/books/"
router.route("/")

  .get(
    cb = () => console.log("get route server side")
  )
  .post(function() {
    console.log('post route')
  });
  
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(
  )
  .put()
  .delete();

module.exports = router;