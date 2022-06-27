const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: Sting,
    required: [true, "Please Provide a User Name that is legal"],
    minlength: [8, "minimum 8 letters "],
    maxlength: [20, "Maximum 20 letters"],
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: "Email address is required",
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  TikTokID: {
    type: String,
    required: [true, "Please Provide a TikTok ID that Is related to your ACC"],
  },
  Photo: {
    type: String,
    required: [true, "Please Provide a Profile Picture"],
  },
  Provider: {
    type: String,
    required: [true, "Please Provide Witch Provider you came From"],
  },
  ContactNumber: {
    type: Number,
    required: [true, "Please Provide a contact Number"],
  },
  Password: {
    type: String,
    required: [true, "Please Provide a PassWord"],
  },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
