const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const portfolioModel = mongoose.model("portfolios", dataSchema);


module.exports = portfolioModel;