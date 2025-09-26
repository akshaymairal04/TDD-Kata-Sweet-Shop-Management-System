// sweet[icon:candy]
//   id string pk
//   name string unique
//   category string
//   price number
//   quantity number
//   createdAt Date

import mongoose, { Schema } from "mongoose";

const sweetSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price must be positive"],
    },
    quantity: {
      type: Number,
      default: 0,
      min: [0, "Quantity cannot be negative"],
    },
  },
  { timestamps: true }
);

export const Sweet = mongoose.model("Sweet", sweetSchema);
