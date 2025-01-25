// lib/db.js
import mongoose from 'mongoose';

const dbConnect = async () => {
  const connection=mongoose.connection.readyState
  if (connection >= 1) {
    // Already connected, no need to connect again
    return;
  }

  try {
    await mongoose.connect(process.env.DATABASE_URL, 
    //   {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
  );
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};

export default dbConnect;
