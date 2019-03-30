const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  _creator: { type: String, required: true },
  _category: { type: String, required: true },
  postBody: { type: String, required: true },
  postType: {type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;