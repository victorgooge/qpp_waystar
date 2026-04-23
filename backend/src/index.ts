import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { testConnection } from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env["PORT"] ?? 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// routes
// app.use("/api/payment-pages", paymentPagesRouter);
// app.use("/api/transactions", transactionsRouter);

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

testConnection()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to connect to database:", err);
    process.exit(1);
  });
