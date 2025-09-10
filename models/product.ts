// models/product.ts
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    price: { type: Number, required: true },
    image: { type: String },
    subsubcategory: { type: mongoose.Schema.Types.ObjectId, ref: "SubSubCategory" },
    subcategory: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const ProductModel = mongoose.models.Product || mongoose.model("Product", ProductSchema);
export default ProductModel;