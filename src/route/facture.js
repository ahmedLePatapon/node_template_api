// router pour les factures

const { Router } = require("express");
const router = Router();

router
  .get("/", (req, res) => {
    res.json({
      message: "Facture router is working!",
    });
  })
  .put("/", (req, res) => {
    res.json({
      message: "Update facture router is working!",
    });
  })
  .post("/", (req, res) => {
    res.json({
      message: "Add facture router is working!",
    });
  })
  .delete("/", (req, res) => {
    res.json({
      message: "Delete facture router is working!",
    });
  });

module.exports = router;
