// router pour les utilisateurs

const { Router } = require("express");
const router = Router();

router
  .get("/", (req, res) => {
    res.json({
      message: "User router is working!",
    });
  })
  .put("/", (req, res) => {
    res.json({
      message: "Update user router is working!",
    });
  })
  .post("/", (req, res) => {
    res.json({
      message: "Add user router is working!",
    });
  })
  .delete("/", (req, res) => {
    res.json({
      message: "Delete user router is working!",
    });
  });

module.exports = router;
