const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/projects", require("./routes/projects"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
