import mongoose from 'mongoose';
const { Schema,model } = mongoose;

const AiOutputSchema = new Schema({
    formData: { type: Object, required: true },
    aiOutput: { type: String, required: true },
    slug: { type: String, required: true },
    createdBy:{type :String,required:true},
},
{ timestamps: true },
);

export default mongoose.models.AiOutput || model('AiOutput', AiOutputSchema)