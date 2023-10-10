import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    guid: { type: String, required: true },
    fullName: { type: String, default: "", required: false },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

const Users = mongoose.models.Users || mongoose.model("Users", UserSchema);

export default Users;
