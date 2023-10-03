import mongoose from "mongoose";

const stockAbbreviationSchema = new mongoose.Schema({
  fullName: String,
  abbrev: String,
  vCount: String,
});

const StockAbbrevation =
  mongoose.models.StockAbbrevation ||
  mongoose.model("StockAbbrevation", stockAbbreviationSchema);

export default StockAbbrevation;
