import mongoose from "mongoose";

const UserStockSchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    quantity: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserStocks =
  mongoose.models.UserStocks || mongoose.model("UserStocks", UserStockSchema);

export default UserStocks;
