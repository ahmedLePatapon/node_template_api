const Facture = require("../models/Facture");

const seedFacture = async (product) => {
  console.log("**********************");
  console.log("product", product);
  console.log("**********************");
  try {
    let facture = new Facture({
      date_achat: new Date(),
      montant: Math.floor(Math.random() * 1000) + 1,
      produit: product.id,
    });
    await facture.save();
    console.log("Facture seeded successfully");
  } catch (error) {
    console.log("Error seeding facture", error);
  }
};

const deleteAllFactures = async () => {
  try {
    let deleteFacture = await Facture.deleteMany();
    console.log("**********************");
    console.log("deleteFacture", deleteFacture);
    console.log("**********************");
  } catch (error) {
    console.log("Error deleting facture", error);
  }
};

module.exports = {
  seedFacture,
  deleteAllFactures,
};
