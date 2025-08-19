const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    feedback: {
      type: String,
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const testimonialModel = mongoose.model("testimonials", dataSchema);

module.exports = testimonialModel;
