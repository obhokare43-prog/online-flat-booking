import Booking from "../models/Booking.js";

export const createBooking = async (req: any, res: any) => {
  const { flatId, bookingDate } = req.body;
  try {
    const booking = new Booking({ userId: req.user.id, flatId, bookingDate });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ error: "Invalid data" });
  }
};

export const getUserBookings = async (req: any, res: any) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id }).populate('flatId');
    // Transform to match previous structure if needed by frontend
    const transformed = bookings.map(b => ({
      id: b._id,
      userId: b.userId,
      flatId: b.flatId,
      bookingDate: b.bookingDate,
      status: b.status,
      flatTitle: (b.flatId as any)?.title,
      location: (b.flatId as any)?.location,
      price: (b.flatId as any)?.price
    }));
    res.json(transformed);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getAdminBookings = async (req: any, res: any) => {
  try {
    const bookings = await Booking.find().populate('flatId').populate('userId');
    const transformed = bookings.map(b => ({
      id: b._id,
      userId: b.userId,
      flatId: b.flatId,
      bookingDate: b.bookingDate,
      status: b.status,
      flatTitle: (b.flatId as any)?.title,
      price: (b.flatId as any)?.price,
      userName: (b.userId as any)?.name,
      userEmail: (b.userId as any)?.email
    }));
    res.json(transformed);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const updateStatus = async (req: any, res: any) => {
  const { status } = req.body;
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
