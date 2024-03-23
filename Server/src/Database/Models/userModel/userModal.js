import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
  },
  Cpassword: {
    type: String,
  },
  account_type: {
    type: String,
  },
});

export const userModel = mongoose.model("user", UserSchema);
