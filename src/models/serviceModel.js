const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const serviceModel = mongoose.model("services", dataSchema);

module.exports = serviceModel;
