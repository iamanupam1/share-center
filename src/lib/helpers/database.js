import mongoose from "mongoose";

const mongoURL = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURL, { dbName: "share-center" });
    if (conn) {
      console.log("DB Connected");
    }
  } catch (error) {
    console.error(error);
  }
};
