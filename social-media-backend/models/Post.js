const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 300,
    },
    image: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const posts = mongoose.model("Post", PostSchema);
module.exports = posts;
