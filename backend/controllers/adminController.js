import dotenv from "dotenv";
dotenv.config();

export const adminLogin = (req, res) => {
  const { password } = req.body;

  if (password === process.env.ADMIN_PASSWORD) {
    return res.status(200).json({ message: "Login successful" });
  } else {
    return res.status(401).json({ message: "Invalid password" });
  }
};

export const adminDashboard = (req, res) => {
  res.status(200).json({ message: "Welcome to the Admin Dashboard" });
};
