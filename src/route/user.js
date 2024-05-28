// router pour les utilisateurs

const { Router } = require("express");
const User = require("../models/user");

const router = Router();

router
  .get("/", (req, res) => {
    const users = User.find();
    res.json({
      message: "GET users router is working!",
    });
  })
  .put("/", (req, res) => {
    const { id } = req.body;
    res.json({
      message: "UPDATE user router is working!",
    });
  })
  .post("/", (req, res) => {
    res.json({
      message: "ADD user router is working!",
    });
  })
  .delete("/", (req, res) => {
    res.json({
      message: "DELETE user router is working!",
    });
  });

module.exports = router;
