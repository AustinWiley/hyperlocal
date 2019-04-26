const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  _creator: { type: String, required: true },
  commentBody: { type: String, required: true },
  date: { type: Date, default: Date.now },
  _post: { type: Schema.Types.ObjectId, ref: 'Post' }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;



