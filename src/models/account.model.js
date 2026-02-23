import mongoose from "mongoose";


const accountSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Account must belong to a user"],
        index: true
    },
    status:{
        enum: ['active', 'inactive', 'closed'],
        message: "Status must be either active, inactive, or closed",
    }   ,
    currency:{
        type: String,
        required: [true, "Currency is required"],
        default:"INR"
    } 
},{timestamps: true});

accountSchema.index({ user: 1, status: 1 });

const accountModel = mongoose.model('account', accountSchema);
export default accountModel;