const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "server is working!" });
});

module.exports = router;
