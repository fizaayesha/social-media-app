const mongoose = require("mongoose");
const ConvoShema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

const convos = mongoose.model("Convo", ConvoShema);
module.exports = convos;
