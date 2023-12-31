import { connectDB } from "@/lib/helpers/database";
import Users from "@/lib/models/User";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export const registerUser = async (payload) => {
  if (!payload) return;
  try {
    connectDB();
    const { email, fullName, password } = payload;
    const hashedPassword = await bcrypt.hash(password, 10);
    const guid = uuidv4();
    const user = await Users.create({
      guid,
      fullName,
      email,
      password: hashedPassword,
    });
    if (user) {
      return user;
    }
    return null;
  } catch (error) {
    console.log(error.message);
  }
};
