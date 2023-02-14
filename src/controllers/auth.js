const { Router } = require("express");

const router = Router();

router.get("/me", (req, res, next) => {
  res.json("me");
});

module.exports = router;