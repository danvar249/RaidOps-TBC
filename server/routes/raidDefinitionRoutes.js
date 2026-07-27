const express = require("express");
const router = express.Router();

const RaidDefinition = require("../models/RaidDefinition");


router.get("/", async (req, res) => {
    const raids = await RaidDefinition.find();
    res.json(raids);
});


router.post("/", async (req, res) => {
    const raid = new RaidDefinition(req.body);

    await raid.save();

    res.json(raid);
});


module.exports = router;