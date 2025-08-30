const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    website: {
      type: String,
    },
    message: {
      type: String,
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const contactModel = mongoose.model("contacts", dataSchema);

module.exports = contactModel;
