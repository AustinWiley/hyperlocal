const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  _partcipant: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  activityName: { type: String, required: true },
  activityImage: { type: String, required: true },
  activityPosts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;