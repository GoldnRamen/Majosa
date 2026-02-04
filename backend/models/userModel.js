import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
    type: String,
    required: true,
    },
    lastName: {
    type: String,
    required: true,
    },
    email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    },
    password: {
    type: String,
    required: true,
    },
    phone: {
    type: String,
    required: true,
    },
    role: {
    type: String,
    enum: ['customer','manager', 'admin'],
    default: 'customer',
    },
}, {timestamps: true,});

const userModel = mongoose.model('User', userSchema);
export default userModel;