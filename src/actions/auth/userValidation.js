import { connectDB } from "@/lib/helpers/database";
import Users from "@/lib/models/User";

export const validateUser = async (email, password) => {
  if (!email || !password) return null;
  try {
    connectDB();
    const user = await Users.findOne({ email });
    if (!user) {
      return null;
    }
    const passwordsMatch = await bcrypt.compare(password, user.password);
    if (!passwordsMatch) {
      return null;
    }
    return user;
  } catch (error) {}
};
