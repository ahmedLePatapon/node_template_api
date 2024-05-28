const mongoose = require("mongoose");
const { Schema } = mongoose;

const factureSchema = new Schema({
  date: Date,
  montant: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  produits: [
    {
      type: Schema.Types.ObjectId,
      ref: "Produit",
    },
  ],
});

module.exports = mongoose.model("Facture", factureSchema);
