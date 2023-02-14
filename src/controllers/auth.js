const { Router } = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const router = Router();

router.get("/me", async (req, res, next) => {
  res.json("me");
});

router.post("/signup", async (req, res, next) => {
  const { userName, email, password } = req.body;
  try {
    const user = new User({ userName, email, password });
    user.password = await user.encryptPassword(user.password);
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
    });

    res.json({ auth: true, token });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.post("/signin", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) return res.status(404).send("The email doesn`t exists");

    if (!user.validatePassword(password))
      return res.status(401).json({ auth: false, token: null });

    const token = jwt.sign({ id: user._id }, process.env.JWT_PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
    });

    res.json({ auth: true, token });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
