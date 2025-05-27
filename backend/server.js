import express from "express";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Backend of Corporate Excellence Awards is running!");
});

app.listen(PORT, () => {
  console.log(
    `✅ Backend Server for Corporate Awards is running on`.green.bold +
      ` http://localhost:${PORT}`.cyan.underline
  );
});
