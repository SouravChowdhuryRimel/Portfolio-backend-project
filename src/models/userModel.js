const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const dataSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// Hash Password before saving
dataSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const userModel = mongoose.model("users", dataSchema);

module.exports = userModel;
