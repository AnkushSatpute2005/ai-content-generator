import mongoose from "mongoose";

const connectToDatabase = async () => {
  console.log("Mongoose connection object:", mongoose.connection);

  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to the database");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw new Error("Database connection failed");
  }
};

export default connectToDatabase;
