const mongoose = require("mongoose");

const assignedRaiderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    class: {
        type: String
    },

    spec: {
        type: String
    },

    role: {
        type: String,
        enum: ["Tank", "Healer", "DPS"]
    }
});


const raidSchema = new mongoose.Schema({

    raidDefinition: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "RaidDefinition",
        required: true
    },

    startDateTime: {
        type: Date,
        required: true
    },

    assignedRaiders: [
        assignedRaiderSchema
    ]

});


module.exports = mongoose.model("Raid", raidSchema);