const mongoose = require("mongoose");
const { Schema } = mongoose;

const produitSchema = new Schema(
  {
    nom: {
      type: String,
    },
    marque: {
      type: String,
    },
    numeroSerie: {
      type: Number,
    },
    garantie: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Produit", produitSchema);
