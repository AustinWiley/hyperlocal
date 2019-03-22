const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  _creator: { type: Schema.Types.ObjectId, ref: 'User' },
  postText: { type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;