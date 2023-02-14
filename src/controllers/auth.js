const { Router } = require("express");
const User = require("../models/User");

const router = Router();

router.get("/me", (req, res, next) => {
  res.json("me");
});

router.post("/signup", async (req, res, next) => {
  const { userName, email, password } = req.body
  User
    .create({ userName, email, password })
    .then((user) => {
      res.json(user)
    })
    .catch((error) => {
      res.status(500).json(error)
    })
})

router.post("/signin", (req, res, next) => {
  const { email, password } = req.body;
  User
    .findOne({ email: email })
    .then((user) => {
      if(!user) return res.status(404).send("The email doesn`t exists")
      res.json(user)
    })
    .catch((error) => {
      res.status(500).json(error)
    })
})

module.exports = router;