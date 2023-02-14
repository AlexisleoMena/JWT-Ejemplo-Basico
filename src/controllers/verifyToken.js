const jwt = require("jsonwebtoken");

async function verifyToken(req, res, next) {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(401).json({ auth: false, menssage: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(500).send({ auth: false, message: error.message });
  }
}

module.exports = verifyToken;
