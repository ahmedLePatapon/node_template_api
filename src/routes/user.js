// router pour les utilisateurs

const { Router } = require("express");
const User = require("../models/user");

const router = Router();

router
  .route("/")
  .get((req, res, next) => {
    const users = User.find();
    res.json({
      message: "GET users router is working!",
    });
  })
  .put((req, res, next) => {
    const { id } = req.body;
    res.json({
      message: "UPDATE user router is working!",
    });
  })
  .post((req, res, next) => {
    res.json({
      message: "ADD user router is working!",
    });
  })
  .delete((req, res, next) => {
    res.json({
      message: "DELETE user router is working!",
    });
  });

module.exports = router;
