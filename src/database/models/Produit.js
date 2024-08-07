const mongoose = require("mongoose");
const { Schema } = mongoose;

const produitSchema = new Schema(
  {
    name: {
      type: String,
    },
    brand: {
      type: String,
    },
    serialNumber: {
      type: String,
    },
    warranty: {
      type: Number,
      default: 1,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Produit", produitSchema);
