import express from "express";
import * as bookingController from "../controllers/bookingController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/", authenticateToken, bookingController.createBooking);
router.get("/user", authenticateToken, bookingController.getUserBookings);
router.get("/admin", authenticateToken, isAdmin, bookingController.getAdminBookings);
router.patch("/:id", authenticateToken, isAdmin, bookingController.updateStatus);

export default router;
