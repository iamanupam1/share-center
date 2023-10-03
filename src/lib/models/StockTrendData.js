import mongoose from "mongoose";

const stockTrendDataSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
  },
  ltp: {
    type: Number,
  },
  change: {
    type: Number,
  },
  open: {
    type: Number,
  },
  high: {
    type: Number,
  },
  low: {
    type: Number,
  },
  quantity: {
    type: String,
  },
  previousClose: {
    type: Number,
  },
  difference: {
    type: Number,
  },
});

const StockTrendData =
  mongoose.models.StockTrendData ||
  mongoose.model("StockTrendData", stockTrendDataSchema);

export default StockTrendData;
