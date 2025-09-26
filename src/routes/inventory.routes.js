import { Router } from "express";
import {
  purchaseSweet,
  restockSweet,
} from "../controllers/inventory.controller.js";
import { verifyJWT, verifyAdmin } from "./auth.middleware.js";

const router = Router();

router.use(verifyJWT);

router.post("/:id/purchase", purchaseSweet);
router.post("/:id/restock", verifyAdmin, restockSweet); // 👈 admin only

export default router;
