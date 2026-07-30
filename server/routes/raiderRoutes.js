const express = require("express");
const router = express.Router();

const Raider = require("../models/Raider");


// Get all raiders
router.get("/", async (req, res) => {
    try {
        const raiders = await Raider.find();
        res.json(raiders);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


// Create a raider
router.post("/", async (req, res) => {
    try {
        const raider = new Raider(req.body);

        await raider.save();

        res.status(201).json(raider);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});


module.exports = router;