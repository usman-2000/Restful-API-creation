const mongoose = require("mongoose");
const validator = require("validator");

// Svhema defined
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Not a valid email");
      }
    },
  },
  status: {
    type: String,
    enum: ["Active", "In-Active"],
    default: "Active",
  },
  dateCreated: Date,
});

// Model Defined

const users = new mongoose.model("users", userSchema);
module.exports = users;
