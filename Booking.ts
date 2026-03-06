import mongoose from "mongoose";

export interface IBooking extends mongoose.Document {
  userId: mongoose.Types.ObjectId;
  flatId: mongoose.Types.ObjectId;
  bookingDate: Date;
  status: 'pending' | 'confirmed' | 'cancelled';
}

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  flatId: { type: mongoose.Schema.Types.ObjectId, ref: 'Flat', required: true },
  bookingDate: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' }
}, { timestamps: true });

const Booking = mongoose.model<IBooking>("Booking", bookingSchema);

export default Booking;
