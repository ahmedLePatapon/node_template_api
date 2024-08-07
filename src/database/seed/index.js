const { faker } = require("@faker-js/faker");
const { seedFacture, deleteAllFactures } = require("./facture.js");
const { seedProduit, deleteAllProduits } = require("./produit.js");
const { seedUser, deleteAllUsers } = require("./user.js");

const seed = async (qty) => {
  // seed user
  let user = await seedUser(1);
  console.log("**********************");
  console.log("user", user);
  console.log("**********************");
  for (let i = 0; i < qty; i++) {
    // seed produit
    let produit = await seedProduit({
      name: faker.commerce.productName(),
      brand: faker.company.name(),
      serialNumber: faker.string.alphanumeric({
        length: { min: 5, max: 10 },
        casing: "upper",
      }),
      warranty: Math.floor(Math.random() * 2) + 1,
      user: user,
    });
    console.log("**********************");
    console.log("produit", produit);
    console.log("**********************");
    // seed facture
    await seedFacture(produit);
  }
};

const dropDatabase = async () => {
  // drop user
  let deleteUser = await deleteAllUsers();
  console.log("**********************");
  console.log("deleteUser", deleteUser);
  console.log("**********************");
  // drop produit
  let deleteProduit = await deleteAllProduits();
  console.log("**********************");
  console.log("deleteProduit", deleteProduit);
  console.log("**********************");
  // drop facture
  let deleteFacture = await deleteAllFactures();
  console.log("**********************");
  console.log("deleteFacture", deleteFacture);
  console.log("**********************");
};

module.exports = {
  seed,
  dropDatabase,
};
