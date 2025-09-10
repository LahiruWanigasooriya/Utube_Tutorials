// models/subcategory.ts
import mongoose from "mongoose";

const SubCategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    image: { type: String },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const SubCategoryModel = mongoose.models.SubCategory || mongoose.model("SubCategory", SubCategorySchema);
export default SubCategoryModel;