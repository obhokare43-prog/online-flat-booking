import mongoose from "mongoose";

export interface IFlat extends mongoose.Document {
  title: string;
  description: string;
  price: number;
  location: string;
  bhk: number;
  imageUrl: string;
  amenities: string;
  isAvailable: boolean;
}

const flatSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  bhk: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  amenities: { type: String },
  isAvailable: { type: Boolean, default: true }
}, { timestamps: true });

const Flat = mongoose.model<IFlat>("Flat", flatSchema);

export default Flat;
