import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Please provide a username."],
    unique: true,
  },
  email: {
    type: String,
    require: [true, "Email is require"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please verify"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.model.users || mongoose.model("users", userSchema);

export default User;
