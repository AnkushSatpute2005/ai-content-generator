
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const AiOutputSchema = new Schema(
  { 
    // slug:{type:String,required:true},
    name:{type:String,required:true},
    image:{type:String,required:true},
    formData: { type: Object, required: true },
    aiOutput: { type: String, required: true },
    slug: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models?.AiOutput || model('AiOutput', AiOutputSchema);

