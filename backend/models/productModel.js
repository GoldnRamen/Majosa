import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    category: { 
        type: String, 
        enum: ['grains', 'fertilizer'], 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    unit: { 
        type: String, 
        required: true 
    },
    stock: { 
        type: Number, 
        required: true 
    },
    image: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    isActive: { 
    type: Boolean, 
    default: true 
    }
}, { timestamps: true });

const productModel = mongoose.model('Product', productSchema);
export default productModel;