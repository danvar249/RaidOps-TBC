const mongoose = require("mongoose");

const raidDefinitionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    size: {
        type: Number,
        required: true
    },

    wowheadUrl: {
        type: String
    }
});

module.exports = mongoose.model(
    "RaidDefinition",
    raidDefinitionSchema
);