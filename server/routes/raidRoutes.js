const express = require("express");
const router = express.Router();

const Raid = require("../models/Raid");


// Get all raids
router.get("/", async (req, res) => {
    try {
        const raids = await Raid.find()
            .populate("raidDefinition").populate("assignedRaiders");

        res.json(raids);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


// Create a raid
router.post("/", async (req, res) => {
    try {
        const raid = new Raid(req.body);

        await raid.save();

        res.status(201).json(raid);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});


module.exports = router;