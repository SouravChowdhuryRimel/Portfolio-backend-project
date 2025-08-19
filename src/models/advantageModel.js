const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    percent: {
      type: Number,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const advantageModel = mongoose.model("advantages", dataSchema);


module.exports = advantageModel;