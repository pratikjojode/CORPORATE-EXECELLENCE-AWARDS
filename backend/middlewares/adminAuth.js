import dotenv from "dotenv";
dotenv.config();

export const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};
