import mongoose from "mongoose";
import { config } from "dotenv";
import User from "./models/user.model.js";

config();

const emailToElevate = process.argv[2];

if (!emailToElevate) {
  console.error("Please specify the email. Usage: node makeAdmin.js <email>");
  process.exit(1);
}

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB database.");

    const user = await User.findOneAndUpdate(
      { email: emailToElevate.toLowerCase().trim() },
      { role: "ADMIN" },
      { new: true }
    );

    if (user) {
      console.log(`\x1b[32mSuccess! ${user.fullName} (${user.email}) is now an ADMIN.\x1b[0m`);
    } else {
      console.log(`\x1b[31mError: User with email "${emailToElevate}" was not found in the database.\x1b[0m`);
    }
  } catch (error) {
    console.error("Database connection error:", error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
};

run();
