const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Api router is working!" });
});

router.use("/users", require("./user"));

router.use("/factures", require("./facture"));

module.exports = router;
