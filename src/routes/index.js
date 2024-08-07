const { Router } = require("express");
const { seed, dropDatabase } = require("../database/seed");
const router = Router();

router.route("/").get((req, res, next) => {
  res.json({ message: "server is working!" });
});

router.route("/seed").get(async (req, res, next) => {
  await dropDatabase();

  await seed(15);
  res.json({ message: "seeding !" });
});

module.exports = router;
