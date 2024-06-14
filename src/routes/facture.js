// router pour les factures

const { Router } = require("express");
const router = Router();

const Facture = require("../database/models/Facture");

router
  .route("/")
  .get((req, res, next) => {
    const factures = Facture.find();
    res.json(factures);
    res.json({
      message: "Facture router is working!",
    });
  })
  .put((req, res, next) => {
    res.json({
      message: "Update facture router is working!",
    });
  })
  .post(async (req, res, next) => {
    let data = {
      date_achat: new Date(),
      montant: Math.floor(Math.random() * 1000) + 1,
    };
    const facture = new Facture(data);

    let factureSaved = await facture.save();
    console.log("**********************");
    console.log("Facture", Facture);
    console.log("data", data);
    console.log("facture", facture);
    console.log("**********************");
    res.json({
      message: "Add facture router is working!",
    });
  })
  .delete((req, res, next) => {
    res.json({
      message: "Delete facture router is working!",
    });
  });

module.exports = router;
