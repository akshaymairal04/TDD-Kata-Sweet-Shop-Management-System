import { Router } from "express";
import {
  addSweet,
  getSweets,
  searchSweets,
  updateSweet,
  deleteSweet,
} from "../controllers/sweet.controller.js";
import { verifyJWT, verifyAdmin } from "../middleware/auth.middleware.js"; // 👈 correct path

const router = Router();

router.use(verifyJWT);

router.post("/", addSweet);
router.get("/", getSweets);
router.get("/search", searchSweets);
router.put("/:id", updateSweet);
router.delete("/:id", verifyAdmin, deleteSweet); // 👈 admin only

export default router;
