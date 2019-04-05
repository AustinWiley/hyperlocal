const db = require("../models");

// Defining methods for the userController
module.exports = {
  findComments: function(req, res) {
    db.Comment
      .find(req.body)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findBrewingComments: function(req, res) {
    db.Comment
      .find(req.body)
      .where('_activity').equals('Brewing')
      .populate("Post")
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createBrewingComments: function(req, res) {
    db.Post
    .update(
      { _id: person._id }, 
      { $push: { comments: comment } },)
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findCodingComments: function(req, res) {
    db.Comment
      .find(req.query)
      .where('_activity').equals('Coding')
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createCodingComments: function(req, res) {
    db.Comment
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findSkiingComments: function(req, res) {
    db.Comment
      .find(req.query)
      .where('_activity').equals('Skiing')
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createSkiingComments: function(req, res) {
    db.Comment
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Comment
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  update: function(req, res) {
    db.Comment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Comment
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Route for saving/updating an Article's associated Note
  // Create a new note and pass the req.body to the entry
  createComment: function(req, res) {
    db.Comment.create(req.body)
      .then(function(body) {
        return db.Post.findOneAndUpdate({ _id: req.params.id }, { comments: body }, { new: true });
      })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
    }
};