const { Router } = require("express");
const router = Router();

// router de base
router.use("/", require("./index"));

// router api
router.use("/api", require("./api"));

module.exports = router;
