// import mongoose from 'mongoose';
// const { Schema, model } = mongoose;

// const PaymentSchema = new Schema(
//   { 
//     // slug:{type:String,required:true},
//     UserName:{type:String,required:true},
//     to_user:{type:String,required:true},
//     order_id: { type: String, required: true },
//     message: { type: String },
//     amount: { type: Number, required: true },
//     // email: { type: String, required: true },
//   },
//   {done:{type:Boolean,default:false}},
//   { timestamps: true },
// );

// export default mongoose.models?.Payment || model('Payment', PaymentSchema);

import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const PaymentSchema = new Schema(
  {
    UserName: { type: String, required: true },
    to_user: { type: String, required: true },
    order_id: { type: String, required: true },
    message: { type: String }, // Optional field
    amount: { type: Number, required: true },
    done: { type: Boolean, default: false },
    // email: { type: String, required: true },
  },
  { timestamps: true } // Correct placement for timestamps
);

export default mongoose.models?.Payment || model('Payment', PaymentSchema);