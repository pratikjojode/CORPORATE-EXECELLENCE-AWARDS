import dotenv from "dotenv";
dotenv.config();

export const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  if (token !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};
