import mongoose from 'mongoose';
// const {Schema ,model}='mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    userName: { type: String, required: true },
    
    // formData: { type: String, required: true },
    // aiResponce: { type: String, required: true},
    // createdBy: { type: String, required: true },    
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

export default mongoose.models.User || mongoose.model('User', UserSchema);
