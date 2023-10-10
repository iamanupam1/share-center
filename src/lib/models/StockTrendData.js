import mongoose from "mongoose";

const stockTrendDataSchema = new mongoose.Schema({
  guid: { type: String, required: true },
  symbol: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
  },
  ltp: {
    type: String,
  },
  change: {
    type: String,
  },
  open: {
    type: String,
  },
  high: {
    type: String,
  },
  low: {
    type: String,
  },
  quantity: {
    type: String,
  },
  previousClose: {
    type: String,
  },
  difference: {
    type: String,
  },
});

const StockTrendData =
  mongoose.models.StockTrendData ||
  mongoose.model("StockTrendData", stockTrendDataSchema);

export default StockTrendData;
