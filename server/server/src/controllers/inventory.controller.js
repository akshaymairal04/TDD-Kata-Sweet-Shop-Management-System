import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Sweet } from "../models/sweet.model.js";

// Purchase sweet
const purchaseSweet = asyncHandler(async (req, res) => {
  const sweet = await Sweet.findById(req.params.id);
  if (!sweet) throw new ApiError(404, "Sweet not found");
  if (sweet.quantity <= 0) throw new ApiError(400, "Sweet out of stock");

  sweet.quantity -= 1;
  await sweet.save();

  return res
    .status(200)
    .json(new ApiResponse(200, sweet, "Sweet purchased successfully"));
});

// Restock sweet (Admin only)
const restockSweet = asyncHandler(async (req, res) => {
  const { amount } = req.body;
  const sweet = await Sweet.findById(req.params.id);
  if (!sweet) throw new ApiError(404, "Sweet not found");

  sweet.quantity += Number(amount) || 1;
  await sweet.save();

  return res
    .status(200)
    .json(new ApiResponse(200, sweet, "Sweet restocked successfully"));
});

export { purchaseSweet, restockSweet };
