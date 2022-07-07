const mongoose = require("mongoose");
const MessageShema = new mongoose.Schema(
  {
    conversationId: {
      type: String,
    },
    sender: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

const msgs = mongoose.model("Message", MessageShema);
module.exports = msgs;
