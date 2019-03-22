const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  _creator: { type: Schema.Types.ObjectId, ref: 'User' },
  commentText: { type: String, required: true },
  _postedOn: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  date: { type: Date, default: Date.now }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;



