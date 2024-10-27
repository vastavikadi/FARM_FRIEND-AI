import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
        userId: decoded.userId,
        email: decoded.email,
        // rating:decoded.ratings,
      };
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token." });
  }
};
export default verifyToken;
