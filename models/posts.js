const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  _creator: { type: Schema.Types.ObjectId, ref: 'User' },
  _category: { type: Schema.Types.ObjectId, ref: 'Activity' },
  postBody: { type: String, required: true },
  postType: {type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;