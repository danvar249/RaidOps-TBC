const mongoose = require("mongoose");

const raiderSchema = new mongoose.Schema({
    name: {
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

    role: {
        type: String,
        enum: ["Tank", "Healer", "DPS"]
    }
});


module.exports = mongoose.model("Raider", raiderSchema);