import express from "express";
import * as flatController from "../controllers/flatController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get("/", flatController.getFlats);
router.get("/:id", flatController.getFlat);
router.post("/", authenticateToken, isAdmin, flatController.createFlat);
router.put("/:id", authenticateToken, isAdmin, flatController.updateFlat);
router.delete("/:id", authenticateToken, isAdmin, flatController.deleteFlat);

export default router;
