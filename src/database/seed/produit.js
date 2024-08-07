const { faker } = require("@faker-js/faker");
const Produit = require("../models/Produit");

const seedProduit = async ({ user, ...data }) => {
  try {
    let produit = new Produit({
      ...data,
      user: user.id,
    });
    console.log("**********************");
    console.log("Produit seeded successfully");
    console.log("**********************");
    return await produit.save();
  } catch (error) {
    console.log("Error seeding produit", error);
  }
};

const deleteAllProduits = async () => {
  try {
    let deleteProduit = await Produit.deleteMany();
    console.log("**********************");
    console.log("deleteProduit", deleteProduit);
    console.log("**********************");
  } catch (error) {
    console.log("Error deleting produit", error);
  }
};

module.exports = {
  seedProduit,
  deleteAllProduits,
};
