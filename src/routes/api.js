const { Router } = require("express");
const router = Router();

router.route("/").get((req, res, next) => {
  res.json({ message: "Api router is working!" });
});

router.use("/users", require("./user"));

router.use("/factures", require("./facture"));

module.exports = router;
