const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


const raidDefinitionRoutes = require("./routes/raidDefinitionRoutes");

app.use("/api/raid-definitions", raidDefinitionRoutes);

const raidRoutes = require("./routes/raidRoutes");

app.use("/api/raids", raidRoutes);

const raiderRoutes = require("./routes/raiderRoutes");

app.use("/api/raider", raiderRoutes);