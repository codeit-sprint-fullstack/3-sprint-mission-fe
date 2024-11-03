import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        id: {
            type: String,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        tags: {
            type: [String],
            default: []
        }
    },
    {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt'
        }
    }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;