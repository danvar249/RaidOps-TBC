const mongoose = require("mongoose");

const raiderSchema = new mongoose.Schema({
    characterName: {
        type: String,
        required: true,
        unique: true
    },

    class: {
        type: String,
        required: true
    },

    spec: {
        type: String
    },
    level: {
        type: Number,
        required: true,
    },
    discordName: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["Tank", "Healer", "DPS"]
    },
    isActive: {
        type: Boolean,
        default: true
    }
});


module.exports = mongoose.model("Raider", raiderSchema);