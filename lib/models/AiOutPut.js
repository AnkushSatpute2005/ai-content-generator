// import mongoose from 'mongoose';
// const { Schema,model } = mongoose;

// const AiOutputSchema = new Schema({
//     formData: { type: Object, required: true },
//     aiOutput: { type: String, required: true },
//     slug: { type: String, required: true },
//    },
// { timestamps: true },
// );

// export default mongoose.models.AiOutput || model('AiOutput', AiOutputSchema)

import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const AiOutputSchema = new Schema(
  {
    name:{type:String,required:true},
    image:{type:String,required:true},
    formData: { type: Object, required: true },
    aiOutput: { type: String, required: true },
    slug: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models?.AiOutput || model('AiOutput', AiOutputSchema);

// import mongoose from 'mongoose';

// const { Schema, model } = mongoose;

// const AiOutputSchema = new Schema(
//   {
//     formData: { type: Object, required: true },
//     aiOutput: { type: String, required: true },
//     slug: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// // Use mongoose.models to avoid re-compilation in development
// console.log(mongoose.models)
// // const AiOutput = mongoose.models.AiOutput || model('AiOutput', AiOutputSchema);

// const {AiOutput}=mongoose.models
// console.log(AiOutput)
// export default AiOutput||model('AiOutput', AiOutputSchema);
