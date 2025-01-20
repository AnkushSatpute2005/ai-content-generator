import mongoose from "mongoose";

// Mongoose connection logic wrapped in an async function
const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/');
    console.log("MongoDB connected");
  } catch (error) {
    console.log('This is an error:', error);
  }
};

// Export the connection function so it can be used in other parts of your app
export default connectToDatabase;