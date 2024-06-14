const mongoose = require("mongoose");
const { Schema } = mongoose;

const factureSchema = new Schema(
  {
    date_achat: Date,
    montant: Number,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    produit: [
      {
        type: Schema.Types.ObjectId,
        ref: "Produit",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Facture", factureSchema);
