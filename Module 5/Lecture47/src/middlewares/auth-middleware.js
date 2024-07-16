const { verifyToken } = require("../../jwt");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: "Unauthorized" });
  const token = authorization.substring(7);
  const { isValidToken, payload } = verifyToken(token);
  if (isValidToken) {
    console.log("Valid Token");
    const user = await User.findOne({ _id: payload._id });
    if (user) {
      req.token = token;
      req.user = user;
    } else {
      return res.status(401).json({ message: "Unauthorized" });
    }
    next();
  } else {
    console.warn("Token not valid");
    return res.status(403).json({ message: "Token not valid" });
  }
};

module.exports = authMiddleware;
