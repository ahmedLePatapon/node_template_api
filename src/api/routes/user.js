const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "User router is working!",
  });
});

module.exports = router;
