import express from "express";
import dotenv from "dotenv";
import { Sequelize, DataTypes } from "sequelize";
import cors from "cors";

dotenv.config(); // Load .env

const app = express();
app.use(express.json());
app.use(cors());

// Read env variables
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const PORT = process.env.PORT || 5000;

console.log("DB_USER:", DB_USER);
console.log("DB_PASSWORD:", DB_PASSWORD);
console.log("DB_HOST:", DB_HOST);
console.log("DB_NAME:", DB_NAME);

// Connect to MySQL using Sequelize
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

const Greeting = sequelize.define("Greeting", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  message: { type: DataTypes.STRING(255), allowNull: false },
}, {
  tableName: "greetings",
  timestamps: false,
});

// Test DB connection and sync
async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully!");
    await sequelize.sync();
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
}

connectDB();

// Routes
app.get("/greeting", async (req, res) => {
  try {
    const greetings = await Greeting.findAll();
    if (!greetings.length) return res.json({ message: "No greetings found" });

    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)].message;
    res.json({ message: randomGreeting });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

app.post("/greeting", async (req, res) => {
  try {
    const { name } = req.body;
    const greetings = await Greeting.findAll();
    const randomGreeting = greetings.length
      ? greetings[Math.floor(Math.random() * greetings.length)].message
      : "Hello!";

    res.json({ message: `${randomGreeting} ${name || "Guest"}!` });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
