import mongoose from 'mongoose';


const aiOutputSchema = new mongoose.Schema({
  aiOutput: {
    type: String,       
    required: true,     
  },
  formData: {
    type: String,       
    required: true,     
  },
  // generatedAt: {
  //   type: Date,
  //   default: Date.now,  
  // },
});
const AIOutput = mongoose.model('AIOutput', aiOutputSchema);

export default AIOutput;