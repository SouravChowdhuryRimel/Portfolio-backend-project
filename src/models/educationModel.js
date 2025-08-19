const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    institute: {
      type: String,
      required: true,
    },
    description: {
      type: String,
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

const educationModel = mongoose.model("educations", dataSchema);


module.exports = educationModel;