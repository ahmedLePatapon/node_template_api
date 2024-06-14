// router pour les factures

const { Router } = require("express");
const router = Router();

const Facture = require("../models/Facture");

router
  .route("/")
  .get((req, res, next) => {
    res.json({
      message: "Facture router is working!",
    });
  })
  .put((req, res, next) => {
    res.json({
      message: "Update facture router is working!",
    });
  })
  .post((req, res, next) => {
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
