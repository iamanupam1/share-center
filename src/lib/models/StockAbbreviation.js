import mongoose from "mongoose";

const stockAbbreviationSchema = new mongoose.Schema({
  guid: { type: String, required: true },
  fullName: String,
  abbrev: String,
  vCount: String,
});

const StockAbbreviation =
  mongoose.models.stockAbbreviation ||
  mongoose.model("stockAbbreviation", stockAbbreviationSchema);

export default StockAbbreviation;
