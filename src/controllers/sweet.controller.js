import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Sweet } from "../models/sweet.model.js";

// Add sweet
const addSweet = asyncHandler(async (req, res) => {
  const { name, category, price, quantity } = req.body;

  if (!name || !category || !price) {
    throw new ApiError(400, "Name, category and price are required");
  }

  const existed = await Sweet.findOne({ name });
  if (existed) {
    throw new ApiError(409, "Sweet already exists");
  }

  const sweet = await Sweet.create({ name, category, price, quantity });
  return res
    .status(201)
    .json(new ApiResponse(201, sweet, "Sweet added successfully"));
});

// Get all sweets
const getSweets = asyncHandler(async (_, res) => {
  const sweets = await Sweet.find({});
  return res
    .status(200)
    .json(new ApiResponse(200, sweets, "Sweets fetched successfully"));
});

// Search sweets
const searchSweets = asyncHandler(async (req, res) => {
  const { name, category, minPrice, maxPrice } = req.query;
  let query = {};

  if (name) query.name = { $regex: name, $options: "i" };
  if (category) query.category = category;
  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = Number(minPrice);
    if (maxPrice) query.price.$lte = Number(maxPrice);
  }

  const sweets = await Sweet.find(query);
  return res
    .status(200)
    .json(new ApiResponse(200, sweets, "Sweets search results"));
});

// Update sweet
const updateSweet = asyncHandler(async (req, res) => {
  const sweet = await Sweet.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!sweet) throw new ApiError(404, "Sweet not found");

  return res
    .status(200)
    .json(new ApiResponse(200, sweet, "Sweet updated successfully"));
});

// Delete sweet (Admin only)
const deleteSweet = asyncHandler(async (req, res) => {
  await Sweet.findByIdAndDelete(req.params.id);
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Sweet deleted successfully"));
});

export { addSweet, getSweets, searchSweets, updateSweet, deleteSweet };
