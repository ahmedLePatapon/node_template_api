const { Router } = require("express");
const router = Router();

router.use("/", require("./index"));
router.use("/api", require("./api"));

module.exports = router;
