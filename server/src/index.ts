import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import tripRoutes from "./routes/tripRoutes";
import placeRoutes from "./routes/placeRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/trips", tripRoutes);
app.use("/api/places", placeRoutes);
app.get("/", (req, res) => {
    res.json({
        message: "Itinerary App API is running",
    })
}); 

const PORT = process.env.PORT || 5000;

import { pool } from "./config/db";

pool.query("SELECT NOW()", )
  .then((result) => {
    console.log("✅ PostgreSQL bağlantısı başarılı:");
    console.log(result.rows[0]);
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});